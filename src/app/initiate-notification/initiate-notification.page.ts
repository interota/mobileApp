import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages/messages.service';

@Component({
  selector: 'app-initiate-notification',
  templateUrl: './initiate-notification.page.html',
  styleUrls: ['./initiate-notification.page.scss'],
})
export class InitiateNotificationPage implements OnInit {

  message : string ;
  title= "Message from HOC Team";
  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
  }

  sendToAll()
  {
    this.messagesService.sendMessageAll(this.title, this.message);
  }
  sendToTeam()
  {
    this.messagesService.sendMessageTeam(this.title, this.message);
  }
  sendToParticipants()
  {
    this.messagesService.sendMessageParticipants(this.title, this.message);
  }
}
