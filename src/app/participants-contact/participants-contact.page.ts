import { ProfileService } from './../FireStore/profile.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../my-modal/my-modal.page';
import { GenericServiceService } from '../generic-service.service';

@Component({
  selector: 'app-participants-contact',
  templateUrl: './participants-contact.page.html',
  styleUrls: ['./participants-contact.page.scss'],
})
export class ParticipantsContactPage implements OnInit {
  public team;
  public participants;
  filterTerm: string;
  constructor(
    public modalController: ModalController,
    public genericService: GenericServiceService,
    private profileService: ProfileService
  ) {}

  async ngOnInit() {
    this.participants = await (await this.profileService.getAll()).filter(p => p.role == "Participant");
    this.team = await (await this.profileService.getAll()).filter(p => p.role != "Participant");
    //await this.profileService.updateCurrentPositionByUserId('CUkTUwrkl4NPnW7pa0KJYHlAbrn1');
    //this.profileService.fillFromJson(null);
  }

  async openModal(participant: any) {
    const modal = await this.modalController.create({
      component: MyModalPage,
      componentProps: {
        participant: JSON.stringify(participant),
      },
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
