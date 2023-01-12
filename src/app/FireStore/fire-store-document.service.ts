import { Injectable, Type } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FireStoreObject } from '../models/fire-store-object';

@Injectable({
  providedIn: 'root',
})
export abstract class FireStoreDocumentService<Model extends FireStoreObject> {
  constructor(
    private firestore: AngularFirestore,
    private classRef: typeof FireStoreObject
  ) {}

  async getAll(): Promise<Model[]> {
    const result = [];
    await this.firestore
      .collection(this.classRef.getCollectionName())
      .get()
      .forEach((res) =>
        res.docs.forEach((doc) => result.push(this.classRef.fromFireStore(doc)))
      );
    return result;
  }

  add(object: Model) {
    this.firestore
      .collection(this.classRef.getCollectionName())
      .add(object.toObject());
  }
}
