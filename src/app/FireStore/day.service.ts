import { Day } from './../models/day';
import { Injectable } from '@angular/core';
import { FireStoreDocumentService } from './fire-store-document.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DayService extends FireStoreDocumentService<Day>{

  constructor(firestore: AngularFirestore) {
    super(firestore, Day);
  }
}
