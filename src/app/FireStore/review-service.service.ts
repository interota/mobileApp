import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Review } from '../models/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {

  constructor(private db: AngularFirestore) { }

  getAllReviews(): Review[]
  {
    const a = this.db.collection('Review').valueChanges().subscribe(items =>
      {
        console.log(items);
      });
    return null;
  }
}
