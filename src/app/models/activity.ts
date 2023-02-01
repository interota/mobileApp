import { Time } from '@angular/common';
import { QueryDocumentSnapshot } from '@angular/fire/compat/firestore';
import { FireStoreObject } from './fire-store-object';


export class Activity extends FireStoreObject {
  constructor(
    public id: string = '',
    public name: string = '',
    public description: string = '',
    public time: string = '',
    public isImportant: boolean = false,
    public images: string[] = [],
    public location: GeolocationPosition = null,
    public rating: number = 0,
    public actualTime: string = ''
  ) {
    super();
  }
  static getCollectionName(): string {
    return 'Activity';
  }

  static async fromFireStore(d: any): Promise<Activity> {
    const object = new Activity(
      d.id,
      d.get('Name'),
      d.get('Description'),
      d.get('Time'),
      d.get('IsImportant'),
      d.get('Images'),
      d.get('Location'),
      d.get('Rating'),
      d.get('ActualTime')
    );
    return object;
  }
  toObject(): object {
    return {
      Name: this.name,
      Description: this.description,
      Time: this.time,
      IsImportant: this.isImportant,
      Images: this.images,
      Location: this.location,
      Rating: this.rating,
      ActualTime: this.actualTime,
    };
  }
}
