import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DayService } from '../FireStore/day.service';
import { GenericServiceService } from '../generic-service.service';

import { Activity } from '../models/activity';
import { Day } from '../models/day';

@Component({
  selector: 'app-first-day',
  templateUrl: './first-day.page.html',
  styleUrls: ['./first-day.page.scss'],
})
export class FirstDayPage implements OnInit, AfterViewInit {
  public segment = 1;
  public arr = new Array(25);
  public program: Day[] = [];
  public selectedDay: Activity[] = [];
  constructor(
    public router: Router,
    public genericService: GenericServiceService,
    public dayService: DayService
  ) {}

  ngAfterViewInit(): void {
  }

  async ngOnInit() {
    this.program = await this.dayService.getAll();
    await new Promise((f) => setTimeout(f, 1000));
    this.selectedDay = this.program[0].Activities;
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
