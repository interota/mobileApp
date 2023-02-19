import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initiate-notification',
  templateUrl: './initiate-notification.page.html',
  styleUrls: ['./initiate-notification.page.scss'],
})
export class InitiateNotificationPage implements OnInit {

  message : string ;
  title= "Message from HOC Team";
  constructor() { }

  ngOnInit() {
  }

  sendToAll()
  {    
    console.log(this.message);
  }
  sendToTeam()
  {
    console.log(this.message);
  }
  sendToParticipants()
  {
    console.log(this.message);
  }
}
