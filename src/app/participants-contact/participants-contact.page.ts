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
  getRandomColor(letter:string): string {
    // const randomColor = Math.floor(Math.random()*16777215).toString(16);
    // return '#' + randomColor;
    // const colors = [
    //   '#ef5350', // red
    //   '#EC407A', // pink
    //   '#AB47BC', // purple
    //   '#7E57C2', // deep purple
    //   '#5C6BC0', // indigo
    //   '#42A5F5', // blue
    //   '#29B6F6', // light blue
    //   '#26C6DA', // cyan
    //   '#26A69A', // teal
    //   '#66BB6A', // green
    //   '#9CCC65', // light green
    //   '#FFA726', // orange
    //   '#FF7043', // deep orange
    //   '#8D6E63', // brown
    //   '#BDBDBD', // grey
    //   '#78909C', // blue grey
    // ]; 
    //    const randomIndex = Math.floor(Math.random() * colors.length);
    // return colors[randomIndex];
    const materialDarkColors: string[] = [
      '#EF5350', // red
      '#EC407A', // pink
      '#AB47BC', // purple
      '#7E57C2', // deep-purple
      '#5C6BC0', // indigo
      '#42A5F5', // blue
      '#29B6F6', // light-blue
      '#26C6DA', // cyan
      '#26A69A', // teal
      '#66BB6A', // green
      '#9CCC65', // light-green
      '#FFA726', // orange
      '#FF7043', // deep-orange
      '#8D6E63', // brown
      '#BDBDBD', // grey
      '#78909C', // blue-grey
      '#FF8A80', // red
      '#FF80AB', // pink
      '#EA80FC', // purple
      '#B388FF', // deep-purple
      '#8C9EFF', // indigo
      '#82B1FF', // blue
      '#80D8FF', // light-blue
      '#84FFFF', // cyan
      '#A7FFEB', // teal
    ];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const index = alphabet.toLowerCase().indexOf(letter.toLowerCase());
     return materialDarkColors[index];

  }
  
}
