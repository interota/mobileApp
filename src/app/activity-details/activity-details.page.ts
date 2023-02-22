import { GeoPoint } from 'firebase/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenericServiceService } from '../generic-service.service';
import { Browser } from '@capacitor/browser';


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
  public dayname:string;
  public dayDate:string;
  constructor(public route: ActivatedRoute,
    public genericService: GenericServiceService,
    ) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.activityDetails = JSON.parse(params.activity);
      this.segment = this.activityDetails.time;
      this.dayProgram = JSON.parse(params.dayProgram);
      const dayDetails = params.segment.split("__");
      this.dayname = dayDetails[0];
      this.dayDate = dayDetails[1];
    }

  );
  }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

  async openTOS(position:GeoPoint) {

    const latitude = position.latitude; // Replace with your desired latitude
    const longitude = position.longitude; // Replace with your desired longitude

  const url = `https://www.google.com/maps?saddr=My+Location&daddr=${latitude},${longitude}`;

    // Use the InAppBrowser plugin to open the URL
    await Browser.open({url : url, windowName: '_system'});
    //await Browser.open({ url: 'http://capacitorjs.com/' });
  }

}
