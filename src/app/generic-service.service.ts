import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class GenericServiceService {
  constructor(private alertController: AlertController) {}

  async sendAlert() {
    const confirmationAlert = await this.alertController.create({
      header: 'Your Alert was sent!\n You will be contacted by our team',
      buttons: ['Dismiss'],
    });

    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (data) => {
            console.log('Cancel clicked');
          },
        },
        {
          text: 'OK',
          handler: (data) => {
            console.log(data.message);
            alert.dismiss();
            confirmationAlert.present();
          },
        },
      ],
      inputs: [
        {
          name: 'message',
          type: 'textarea',
          placeholder: 'Type your message',
        },
      ],
    });

    await alert.present();
  }
}