export class Profile {
  constructor(
    private id: string,
    private userId: string,
    private fullName: string,
    private tel: string,
    private currentLocation: GeolocationPosition,
    private picture: string,
    private role: string,
    private responsibleId: Profile
  ) {}



  getId(): string {
    return this.id;
  }

  getUserId(): string {
    return this.userId;
  }

  getFullName(): string {
    return this.fullName;
  }

  getTel(): string {
    return this.tel;
  }

  getCurrentLocation(): any {
    return this.currentLocation;
  }


  getPicture(): string {
    return this.picture;
  }


  getRole(): string {
    return this.role;
  }


  getResponsible(): Profile {
    return this.responsibleId;
  }

}
