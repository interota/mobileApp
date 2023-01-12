import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from '../FireStore/activity.service';
import { DayService } from '../FireStore/day.service';
import { ReviewServiceService } from '../FireStore/review-service.service';
import { GenericServiceService } from '../generic-service.service';
import { Review } from '../models/review';

import { Activity } from '../models/activity';
import { Day } from '../models/day';

@Component({
  selector: 'app-first-day',
  templateUrl: './first-day.page.html',
  styleUrls: ['./first-day.page.scss'],
})
export class FirstDayPage implements OnInit {

  public segment = 'firstDay';
  public arr = new Array(25);
  public program: Day[] =[];
  public dayOne: Activity[] = [];
  constructor(public router: Router, public genericService: GenericServiceService, public dayService: DayService) { }

  ngOnInit() {
    this.dayService.getAll().then(prgrm => {
      this.program = prgrm;
      this.dayOne = this.program[0].Activities;
    });
  }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
  navigateTo(activity: any, dayProgram: any)
  {

    this.router.navigate(['/activity-details'], { queryParams: { activity: JSON.stringify(activity), dayProgram: JSON.stringify(dayProgram)} });
  }
}
