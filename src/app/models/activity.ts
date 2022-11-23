import { Time } from '@angular/common';


export class Activity {

  constructor(
    private id: string,
    private name: string,
    private description: string,
    private images: string[],
    private location: GeolocationPosition,
    private time: Time,
    private actualTime: Time,
    private rating: number,
    private templateId: number,
  ) {}


}
