import { QueryDocumentSnapshot } from '@angular/fire/compat/firestore';

export abstract class FireStoreObject {
  static async fromFireStore(d: QueryDocumentSnapshot<unknown>): Promise<FireStoreObject> {
    throw new Error('not implemented!');
  }

  static getCollectionName(): string{
    throw new Error('not implemented!');
  }

  abstract toObject(): object;
}
