import {
  DocumentReference,
  QueryDocumentSnapshot,
} from '@angular/fire/compat/firestore';
import { FireStoreObject } from './fire-store-object';

export class Profile extends FireStoreObject {
  constructor(
    public id: string = '',
    public fullName: string = '',
    public tel: string = '',
    public email = '',
    public country: string = '',
    public district: string = '',
    public club: string = '',
    public picture: string = '',
    public currentLocation: GeolocationPosition = null,
    public role: string = '',
    public responsibleId: string = '',
    public userId: string = '',
    public deviceToken: string = ''
  ) {
    super();
  }

  static getCollectionName(): string {
    return 'Profile';
  }

  static async fromFireStore(d: QueryDocumentSnapshot<unknown>): Promise<Profile> {
    let object = new Profile(
      d.id,
      d.get('FullName'),
      d.get('Tel'),
      d.get('Email'),
      d.get('Country'),
      d.get('District'),
      d.get('Club'),
      d.get('Picture'),
      d.get('CurrentLocation'),
      d.get('Role'),
      d.get('ResponsibleId'),
      d.get('UserId'),
      d.get('DeviceToken')
    );
    return object;
  }
  toObject(): object {
    return {
      FullName: this.fullName,
      Tel: this.tel,
      Email: this.email,
      Picture: this.picture,
      Country: this.country,
      District: this.district,
      Club: this.club,
      CurrentLocation: this.currentLocation,
      Role: this.role,
      ResponsibleId : this.responsibleId,
      UserId : this.userId,
      DeviceToken : this.deviceToken
    };
  }
}
