import { ProfileService } from './FireStore/profile.service';
import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { tap } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { LocalNotifications} from '@capacitor/local-notifications';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  //userName ="Ahmed Besbes";
  userName :string;
  public appPages = [
    { title: 'Home', url: '/first-day', icon: 'home' },
    { title: 'Useful Contact', url: '/useful-contact', icon: 'call' },
   // { title: 'Review', url: '/folder/Archived', icon: 'star-half' },
    {
      title: 'Participants Contact',
      url: '/participants-contact',
      icon: 'people',
    },
    {
      title: 'Direction to Hotel',      
      icon: 'people',
    },
    {
      title: 'Initiate Notification',
      url: '/initiate-notification',
      icon: 'notifications',
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
  }
  async roadToHotel(){
   

  const url = `https://www.google.com/maps?saddr=My+Location&daddr=33.7631995,11.0199572`;

    // Use the InAppBrowser plugin to open the URL
    await Browser.open({url : url, windowName: '_system'});
    //await Browser.open({ url: 'http://capacitorjs.com/' });

  }

}
