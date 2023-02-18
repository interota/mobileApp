import { tap } from 'rxjs';
import { ProfileService } from './../FireStore/profile.service';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { FirebaseLoginService } from '../services/firebaseLogin/firebase-login.service';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {
  public form: FormGroup;

  constructor(
    public modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private fireService: FirebaseLoginService,
    private route: ActivatedRoute,
    private router: Router,
    private afMessaging: AngularFireMessaging,
    private profileService: ProfileService,
    private toastController: ToastController
  ) {}

  get f() {
    return this.form.controls;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log(this.form.invalid);
      return;
    }
    this.fireService.login(this.f.email.value, this.f.password.value).then(
      async (result) => {
        this.requestPermission();
        this.registerPosition();
        this.router.navigateByUrl('/first-day');
      },
      async (error) => {
        console.log('failed');
      }
    );
  }
  registerPosition() {
    Geolocation.watchPosition(
      { enableHighAccuracy: true },
      async (position, err) => {
        if (position != null) {
          this.profileService.updatePositionByUserId(
            (await this.fireService.getCurrentUser()).uid,
            position
          );
        }
      }
    );
  }

  requestPermission() {
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener('registration', (token: Token) => {
      this.fireService.getCurrentUser().then((user) => {
        this.profileService.update(user.uid, {
          DeviceToken: token.value,
        });
      });
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        alert('Push received: ' + JSON.stringify(notification));
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      }
    );
  }
}
