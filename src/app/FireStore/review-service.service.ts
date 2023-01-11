import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Review } from '../models/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewServiceService {
  constructor(private db: AngularFirestore) {}

  getAllReviews(): Review[] {
    // eslint-disable-next-line prefer-const
    let result: Review[] = [];
    this.db
      .collection('Review')
      .valueChanges()
      .subscribe((review) => result.push(/*review.entries()*/null));
    return result;
  }
}
