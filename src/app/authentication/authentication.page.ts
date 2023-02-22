import { tap } from 'rxjs';
import { ProfileService } from './../FireStore/profile.service';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { FirebaseLoginService } from '../services/firebaseLogin/firebase-login.service';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

import { Geolocation } from '@capacitor/geolocation';
import { AppComponent } from '../app.component';
import { LocalNotifications } from '@capacitor/local-notifications';
import { ActivityService } from '../FireStore/activity.service';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {
  public form: FormGroup;
  errorMessage: string;
  static notificationId: number = 0;

  constructor(
    public modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private fireService: FirebaseLoginService,
    private route: ActivatedRoute,
    private router: Router,
    private afMessaging: AngularFireMessaging,
    private profileService: ProfileService,
    private toastController: ToastController,
    private alertController: AlertController,
    private appComponent: AppComponent,
    private activityService: ActivityService
  ) {}

  get f() {
    return this.form.controls;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['123456789'],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log(this.form.invalid);
      return;
    }

    this.fireService.login(this.f.email.value, this.f.password.value).then(
      async (result) => {
        await this.registerPosition();
        this.requestPermission();
        this.registerPosition();
        this.registerLocalNotifications();
        // this.profileService.getUserDetails().finally();
        // this.appComponent.userName=this.profileService.userName;
        this.profileService
          .getProfileByUserId(
            (await this.fireService.angularFireAuthentication.currentUser).uid
          )
          .then((p) => {
            this.appComponent.userName = p.fullName;
          });
        this.router.navigateByUrl('/first-day');
      },
      async (error) => {
        this.showError();
      }
    );
  }

  registerLocalNotifications() {
    this.activityService.getAll().then((activities) => {
      activities.forEach((activity) => {
        let time = activity.timestamp.seconds - 15 * 60;
        let date = new Timestamp(time, 0);
        LocalNotifications.schedule({
          notifications: [
            {
              title: 'Reminder: ' + activity.name,
              body: 'Next Activity is in about 30 Minutes',
              id: AuthenticationPage.notificationId,
              schedule: { at: date.toDate() }, // Schedule the notification to appear 5 seconds from now
            },
          ],
        });
        AuthenticationPage.notificationId++;
      });
    });
  }

  async showError() {
    const alert = await this.alertController.create({
      header: 'Wrong credentials',
      buttons: [
        {
          text: 'OK',
          handler: (data) => {
            alert.dismiss();
          },
        },
      ],
    });
    await alert.present();
  }
  async registerPosition() {
    await Geolocation.watchPosition(
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

    PushNotifications.addListener('registration', async (token: Token) => {
      this.profileService.updateTokenByUserId(
        (await this.fireService.getCurrentUser()).uid,
        token.value
      );
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
