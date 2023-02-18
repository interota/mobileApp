import { Injectable, Type } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FireStoreObject } from '../models/fire-store-object';

@Injectable({
  providedIn: 'root',
})
export abstract class FireStoreDocumentService<Model extends FireStoreObject> {
  constructor(
    protected firestore: AngularFirestore,
    private classRef: typeof FireStoreObject
  ) {}

  async getAll(): Promise<Model[]> {
    let result = [];
    await this.firestore
      .collection(this.classRef.getCollectionName())
      .get()
      .forEach(async (res) =>
        await res.docs.forEach(async (doc) => result.push( await this.classRef.fromFireStore(doc)))
      );
    return result;
  }

  add(object: Model) {
    this.firestore
      .collection(this.classRef.getCollectionName())
      .add(object.toObject());
  }

  async update(id: string, field: Partial<any>)
  {
    await this.firestore
      .doc('/'+this.classRef.getCollectionName()+'/'+id)
      .update(field);
  }
}
