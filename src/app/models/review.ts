import { QueryDocumentSnapshot } from "@angular/fire/compat/firestore";

export class Review {
  constructor(
    public id: string,
    public userId: string,
    public activityId: string,
    public message: string,
    public rating: number
  ) {}

  static FromFireStore(d: QueryDocumentSnapshot<unknown>): Review {
    const object = new Review(d.id, d.get('UserId'), d.get('ActivityId'), d.get('Message'), d.get('Rating'));
    return object;
  }

}
