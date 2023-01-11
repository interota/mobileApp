import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Review } from '../models/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewServiceService {

  result: Review[] = [];
  constructor(private firestore: AngularFirestore) {}



  getAllReviews(): Review[] {
    this.firestore.collection('Review').get().toPromise().then(res => {
      res.docs.forEach(d => this.result.push(Review.FromFireStore(d)));
    });
    return this.result;
  }

  addReview(review: Review)
  {
    const obj =
    {
      "UserId" : review.userId,
      "ActivityId" : review.activityId,
      "Message" : review.message,
      "Rating" : review.rating

    };
    this.firestore.collection('Review').add(obj);
    }
}
