import { Component, OnInit, ViewChild } from '@angular/core';
import {  ModalController } from '@ionic/angular';
import { MyModalPage } from '../my-modal/my-modal.page';

@Component({
  selector: 'app-participants-contact',
  templateUrl: './participants-contact.page.html',
  styleUrls: ['./participants-contact.page.scss'],
})
export class ParticipantsContactPage implements OnInit {

  public participants =[
    {
      "name":"Labib Mezghanni",
      "country":"Tunisia",
      "phone":"+216 22870601",
      "email":"mezghanni.labib@gmail.com",
      "club":"Rotaract club tunis les berges du lac",
      "district":"9010",
      "img":""
    },
    {
      "name":"Labib Mezghanni2",
      "country":"Tunisia",
      "phone":"+216 22870601",
      "email":"mezghanni.labib@gmail.com2",
      "club":"Rotaract club tunis les berges du lac",
      "district":"9010",
      "img":""
    },
    {
      "name":"khalil Naccache",
      "country":"Tunisia",
      "phone":"+216 22870601",
      "email":"mezghanni.labib@gmail.com3",
      "club":"Rotaract club tunis les berges du lac",
      "district":"9010",
      "img":""
    },
  ]

  filterTerm: string;
  constructor(public modalController : ModalController) { }

  ngOnInit() {
  }
  
  async openModal(participant: any) {
    const modal = await this.modalController.create({
      component: MyModalPage,
      componentProps: {
        "participant": JSON.stringify(participant),        
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

}
