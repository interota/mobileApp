import { GeoPoint } from 'firebase/firestore';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})
export class MyModalPage implements OnInit {


  async openTOS(position:GeoPoint) {

    const latitude = position.latitude; // Replace with your desired latitude
    const longitude = position.longitude; // Replace with your desired longitude

  const url = `https://www.google.com/maps?saddr=My+Location&daddr=${latitude},${longitude}`;

    // Use the InAppBrowser plugin to open the URL
    await Browser.open({url : url, windowName: '_system'});
    //await Browser.open({ url: 'http://capacitorjs.com/' });
  }

  participant: any;
  modelId: number;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.participant = JSON.parse(this.navParams.data.participant);
  }

  async closeModal() {
    const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }

}
