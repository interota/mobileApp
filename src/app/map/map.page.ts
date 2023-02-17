import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ProfileService } from '../FireStore/profile.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements AfterViewInit {

  private map;
  marker: any;

  private async initMap(): Promise<void> {
    const profile = await this.profileService.getProfileByUserId('CUkTUwrkl4NPnW7pa0KJYHlAbrn1');
    this.map = L.map('map', {
      center: [ profile.currentLocation.latitude, profile.currentLocation.longitude],
      zoom: 12
    });
     this.marker = new L.Marker([ profile.currentLocation.latitude, profile.currentLocation.longitude]);

  }

  constructor(private profileService:ProfileService) { }
  async ngAfterViewInit(): Promise<void> {
    await this.initMap();

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    this.marker.addTo(this.map);

  }



}
