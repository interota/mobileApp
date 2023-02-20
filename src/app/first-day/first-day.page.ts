import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ViewWillEnter } from '@ionic/angular';
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
export class FirstDayPage implements OnInit, AfterViewInit, ViewWillEnter {
  public segment = 1;
  public arr = new Array(25);
  public program: Day[] = [];
  public selectedDay: Activity[] = [];
  public profile;

  constructor(
    public router: Router,
    public genericService: GenericServiceService,
    public dayService: DayService,
    private loadingCtrl: LoadingController
  ) {}
  async ionViewWillEnter() {
    this.program = await (await this.dayService.getAll());
    let loading = this.loadingCtrl.create({
      message : "Loading ..."
    });
    (await loading).present();
    await new Promise((f) => setTimeout(f, 3000));
    (await loading).dismiss();
    this.program = this.program.sort(
      function(a, b) {
        var textA = a.Order.toUpperCase();
        var textB = b.Order.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }
    );
    this.selectedDay = this.program[0].Activities;
  }

  async ngAfterViewInit(): Promise<void> {

  }


  async ngOnInit() {

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
