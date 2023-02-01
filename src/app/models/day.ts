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
  static async fromFireStore(d: QueryDocumentSnapshot<unknown>): Promise<Day> {
    const day = new Day();
    const acts: DocumentReference[] = d.get('activities');
    day.Activities = new Array(acts.length);
    for (let  index  = 0; index < acts.length; index++) {
      const element = acts[index];
       day.Activities[index] =  await Activity.fromFireStore(await element.get());
    }
    return day;
  }

  toObject(): object {
    throw new Error('Method not implemented.');
  }
}
