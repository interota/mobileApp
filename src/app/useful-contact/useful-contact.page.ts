import { Profile } from './../models/profile';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../FireStore/profile.service';
import { GenericServiceService } from '../generic-service.service';
import { FirebaseLoginService } from '../services/firebaseLogin/firebase-login.service';

@Component({
  selector: 'app-useful-contact',
  templateUrl: './useful-contact.page.html',
  styleUrls: ['./useful-contact.page.scss'],
})
export class UsefulContactPage implements OnInit {
  buddy: Profile;

  constructor(
    public genericService: GenericServiceService,
    private loginservice: FirebaseLoginService,
    private profileService: ProfileService
  ) {
    this.buddy = null;
  }

  async ngOnInit() {
    this.buddy = await this.profileService.getProfileByUserId(
      (
        await this.profileService.getUserDetails()
      ).responsibleId
    );
  }
}
