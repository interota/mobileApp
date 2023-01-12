import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Activity } from '../models/activity';
import { FireStoreDocumentService } from './fire-store-document.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService extends FireStoreDocumentService<Activity> {

  constructor(firestore: AngularFirestore) {
    super(firestore, Activity);
  }
}
