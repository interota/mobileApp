import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseLoginService } from 'src/app/services/firebaseLogin/firebase-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private fireService: FirebaseLoginService
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
      return;
    }
    this.fireService.login(this.f.email.value, this.f.password.value).then(async (result) => {

        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Important message',
          message: 'This is an alert!',
          buttons: ['OK'],
        });

        await alert.present();


    } ,
    async (error)=> {

      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'ta7chelik',
        message: 'This is an alert!',
        buttons: ['OK'],
      });

      await alert.present();

    });
  }
}
