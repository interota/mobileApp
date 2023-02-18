import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DayService } from '../FireStore/day.service';
import { ProfileService } from '../FireStore/profile.service';
import { GenericServiceService } from '../generic-service.service';

import { Activity } from '../models/activity';
import { Day } from '../models/day';
import { FirebaseLoginService } from '../services/firebaseLogin/firebase-login.service';

@Component({
  selector: 'app-first-day',
  templateUrl: './first-day.page.html',
  styleUrls: ['./first-day.page.scss'],
})
export class FirstDayPage implements OnInit {
  public segment = 1;
  public arr = new Array(25);
  public program: Day[] = [];
  public selectedDay: Activity[] = [];
  public profile;
  constructor(
    public router: Router,
    public genericService: GenericServiceService,
    public dayService: DayService,
  ) {}

  ngOnInit() {
    this.dayService.getAll().then((prgrm) => {
      this.program = prgrm;
      this.selectedDay = this.program[0].Activities;
    });
  }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
    this.selectedDay = this.program[this.segment - 1].Activities;
  }
  navigateTo(activity: any, dayProgram: any) {
    this.router.navigate(['/activity-details'], {
      queryParams: {
        activity: JSON.stringify(activity),
        dayProgram: JSON.stringify(dayProgram),
      },
    });
  }
}
