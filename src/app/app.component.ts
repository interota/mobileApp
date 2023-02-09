import { ProfileService } from './FireStore/profile.service';
import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { tap } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/first-day', icon: 'home' },
    { title: 'Useful Contact', url: '/folder/Inbox', icon: 'call' },
    { title: 'Review', url: '/folder/Archived', icon: 'star-half' },
    {
      title: 'Participants Contact',
      url: '/participants-contact',
      icon: 'people',
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
