import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class FcmProviderService {
  constructor(
    public native:FirebaseApp ,
    public firestore: AngularFirestore,
    public platform: Platform
  ) {
  }

  async getToken()
  {

  }
}
