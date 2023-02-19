import { Component, OnInit } from '@angular/core';
import { GenericServiceService } from '../generic-service.service';

@Component({
  selector: 'app-useful-contact',
  templateUrl: './useful-contact.page.html',
  styleUrls: ['./useful-contact.page.scss'],
})
export class UsefulContactPage implements OnInit {

  constructor(
    public genericService: GenericServiceService,
  ) { }

  ngOnInit() {
  }

}
