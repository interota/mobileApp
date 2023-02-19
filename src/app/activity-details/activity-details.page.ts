import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenericServiceService } from '../generic-service.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.page.html',
  styleUrls: ['./activity-details.page.scss'],
})
export class ActivityDetailsPage implements OnInit {
  public dayOne =[
    {
      title:'Departure To Djerba',
      time:'4:00 AM',
      desc:'We’re going to start our program with a very fun road trip. The buses are going to leave Tunis at 4am to go to Djerba and while you can sleep during the trip, we’re going to offer refreshments to keep you alert and to follow our touristic guide stories.'
    }
  ];
  public activityDetails: any;
  public dayProgram: any;
  public segment = '';
  constructor(public route: ActivatedRoute,
    public genericService: GenericServiceService,
    ) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.activityDetails = JSON.parse(params.activity);
      this.segment = this.activityDetails.time;
      this.dayProgram = JSON.parse(params.dayProgram);

    }
  );
  }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

}
