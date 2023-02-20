import { ProfileService } from './FireStore/profile.service';
import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { tap } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { LocalNotifications} from '@capacitor/local-notifications'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userName : string;
  public appPages = [
    { title: 'Home', url: '/first-day', icon: 'home' },
    { title: 'Useful Contact', url: '/useful-contact', icon: 'call' },
    { title: 'Review', url: '/folder/Archived', icon: 'star-half' },
    {
      title: 'Participants Contact',
      url: '/participants-contact',
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
    LocalNotifications.schedule({
      notifications: [
        {
          title: 'Reminder',
          body: 'This is the body of the notification',
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 5) }, // Schedule the notification to appear 5 seconds from now
        }
      ]
    });

  }

}
