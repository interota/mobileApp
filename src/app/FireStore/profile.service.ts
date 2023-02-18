import { async } from '@angular/core/testing';
import { Profile } from './../models/profile';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FireStoreDocumentService } from './fire-store-document.service';
import { GeoPoint } from 'firebase/firestore';
import { Geolocation } from '@capacitor/geolocation';
import { FirebaseLoginService } from '../services/firebaseLogin/firebase-login.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends FireStoreDocumentService<Profile> {
  obj = [
    {
      FullName: 'Khalil',
      Tel: '123456789',
      Picture: '',
      Country: 'Tunisia',
      District: '9010',
      Club: 'ESSECT',
      CurrentLocation: '',
      Role: 'HOC Lead',
      RespensibleId: null,
    },
    {
      FullName: 'Labib',
      Tel: '123456789',
      Picture: '',
      Country: 'Tunisia',
      District: '9010',
      Club: 'LAC',
      CurrentLocation: '',
      Role: 'HOC Logistics Lead',
      RespensibleId: null,
    },
    {
      FullName: 'Besbes',
      Tel: '123456789',
      Picture: '',
      Country: 'Tunisia',
      District: '9010',
      Club: 'ESPRIT',
      CurrentLocation: '',
      Role: 'IT member',
      RespensibleId: null,
    },
    {
      FullName: 'Participant1',
      Tel: '123456789',
      Picture: '',
      Country: 'Germany',
      District: '111',
      Club: 'GERMANY CLUB',
      CurrentLocation: '',
      Role: 'Participant',
      RespensibleId: null,
    },
  ];

  constructor(firestore: AngularFirestore,
    private fireService: FirebaseLoginService,
    ) {
    super(firestore, Profile);
  }
  async getUserDetails()
  {
    
    this.fireService.getCurrentUser().then(async (user) => {
      
      return await this.getProfileByUserId(user.uid);      
    });
  }

  async getProfileByUserId(userId: string): Promise<Profile> {
    let profile = null;
    await this.firestore
      .collection(Profile.getCollectionName(), (ref) =>
        ref.where('UserId', '==', userId)
      )
      .get()
      .forEach((res) =>
        res.docs.forEach((d) => (profile = Profile.fromFireStore(d)))
      );
    return profile;
  }


  async updateCurrentPositionByUserId(userId)
  {
    const tmp = await Geolocation.getCurrentPosition();
    const point: GeoPoint = new GeoPoint(tmp.coords.latitude, tmp.coords.longitude);
    await this.firestore
      .collection(Profile.getCollectionName(), (ref) =>
        ref.where('UserId', '==', userId)
      )
      .get()
      .forEach((res) =>
        res.docs.forEach((d) => d.ref.update({CurrentLocation : point }))
      );
  }

  fillFromJson(json: any[]) {
    this.obj.forEach((profile) => {
      this.add(
        new Profile(
          '',
          profile.FullName,
          profile.Tel,
          '',
          profile.Country,
          profile.District,
          profile.Club,
          profile.Picture,
          null,
          profile.Role
        )
      );
    });
  }
}
