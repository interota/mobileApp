import { ActivityService } from './../FireStore/activity.service';
import {
  DocumentReference,
  QueryDocumentSnapshot,
  Reference,
} from '@angular/fire/compat/firestore';
import { Activity } from './activity';
import { FireStoreObject } from './fire-store-object';

export class Day extends FireStoreObject {
  public Activities: Activity[] = [];

  static getCollectionName(): string {
    return 'Day';
  }
  static fromFireStore(d: QueryDocumentSnapshot<unknown>): FireStoreObject {
    const day = new Day();
    const acts: DocumentReference[] = d.get('activities');
    day.Activities = new Array(acts.length);
    for (let  index  = 0; index < acts.length; index++) {
      const element = acts[index];
      element.get().then((t) => day.Activities[index] = Activity.fromFireStore(t));
    }
    return day;
  }

  toObject(): object {
    throw new Error('Method not implemented.');
  }
}
