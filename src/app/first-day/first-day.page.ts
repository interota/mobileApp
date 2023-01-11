import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericServiceService } from '../generic-service.service';

@Component({
  selector: 'app-first-day',
  templateUrl: './first-day.page.html',
  styleUrls: ['./first-day.page.scss'],
})
export class FirstDayPage implements OnInit {

  public segment: string = "firstDay";
  public arr = new Array(25);
  public dayOne =[
    {
      "title":"Departure To Djerba",
      "time":"4:00 AM",
      "desc":"We’re going to start our program with a very fun road trip. The buses are going to leave Tunis at 4am to go to Djerba and while you can sleep during the trip, we’re going to offer refreshments to keep you alert and to follow our touristic guide stories.",      
    },
    {
      "title":"Breakfast in el Djem",
      "time":"10:00 AM",
      "desc":"At 10 am, when we reach El Djem we’re going to have our breakfast. El Djem contains one of the largest Coliseums in the world. After breakfast, we’ll have a guided tour explaining the history behind the “Colosseum of Thysdrus”.",
      "img":"http://www.interota2023.com/assets/img/gallery/IMG-8.png"
    },
    {
      "title":"Hotel Check-in + Lunch",
      "time":"02:00 PM",
      "desc":"After a small exploration break, we will continue our trip to Djerba and we’ll check you in as soon as we reach the hotel to allow you to have lunch and catch your breath."
    },
    {
      "title":"Opening ceremony",
      "time":"06:00 PM",
      "desc":"At 06:00 pm, we will officially start Interota 2023 and welcome all participants to Tunisia. We will share and explain to you our detailed program and treat you with a memorable surprise."
    },
    {
      "title":"Dinner",
      "time":"09:00 PM",
      "desc":"A light party is planned at the end of the day to allow you to relax, network and most importantly have fun!"
    },
    {
      "title":"PARTY",
      "time":"11:00 PM",
      "desc":"After the opening ceremony, the participants can change into more comfortable clothes to enjoy a cozy dinner in the hotel."
    }
  ]
  constructor(public router: Router, public genericService: GenericServiceService) { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
  navigateTo(activity: any, dayProgram: any)
  {
    this.router.navigate(['/activity-details'], { queryParams: { "activity": JSON.stringify(activity), "dayProgram": JSON.stringify(dayProgram)} });
  }
}
