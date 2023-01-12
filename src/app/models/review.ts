import { QueryDocumentSnapshot } from '@angular/fire/compat/firestore';
import { FireStoreObject } from './fire-store-object';

export class Review extends FireStoreObject {
  constructor(
    public id?: string,
    public userId?: string,
    public activityId?: string,
    public message?: string,
    public rating?: number
  ) {
    super();
  }

  static fromFireStore(d: QueryDocumentSnapshot<unknown>): Review {
    const object = new Review(
      d.id,
      d.get('UserId'),
      d.get('ActivityId'),
      d.get('Message'),
      d.get('Rating')
    );
    return object;
  }

  static getCollectionName()
  {
    return 'Review';
  }

  toObject(): object {
    return {
      UserId : this.userId,
      ActivityId : this.activityId,
      Message : this.message,
      Rating : this.rating

    };
  }
}
