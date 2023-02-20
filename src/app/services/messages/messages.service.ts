import { ProfileService } from './../../FireStore/profile.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(
    private httpclient: HttpClient,
    private profileService: ProfileService
  ) {}

  sendMessage(title: String, msg: string, tokens: String[]) {
    const body = {
      notification: {
        title: title,
        body: msg,
        icon: "loder"
      },
      registration_ids: tokens,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:
          'Key=AAAAsz4_hcg:APA91bFXbAsjY1uBtXRVaojZrGNII95avnTXXVSEPAZ0jgZaSulxG-16fDWcJ72arGY0q41zmCTnHZ13bQjVjdQQhpJG5LyH3d7iqcxWlKa2y81y8vx7skgR2KUjv7YMMqIzEpdi2_Iw',
      }),
    };
    this.httpclient
      .post('https://fcm.googleapis.com/fcm/send', body, httpOptions)
      .subscribe();
  }

  sendMessageAll(title: String, msg: string) {
    const tokens = [];
    this.profileService.getAll().then((profiles) => {
      profiles.forEach((profile) => {
        if (profile.deviceToken != '') {
          tokens.push(profile.deviceToken);
        }
      });
      this.sendMessage(title, msg, tokens);
    });
  }

  sendMessageParticipants(title: string, msg: string) {
    const tokens = [];
    this.profileService.getAll().then((profiles) => {
      profiles.forEach((profile) => {
        if (profile.deviceToken != '' && profile.role == 'Participant') {
          tokens.push(profile.deviceToken);
        }
      });
      this.sendMessage(title, msg, tokens);
    });
  }

  sendMessageTeam(title: String, msg: string) {
    const tokens = [];
    this.profileService.getAll().then((profiles) => {
      profiles.forEach((profile) => {
        if (profile.deviceToken != '' && profile.role !== 'Participant') {
          tokens.push(profile.deviceToken);
        }
      });
      this.sendMessage(title, msg, tokens);
    });
  }
}
