import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitiateNotificationPageRoutingModule } from './initiate-notification-routing.module';

import { InitiateNotificationPage } from './initiate-notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitiateNotificationPageRoutingModule
  ],
  declarations: [InitiateNotificationPage]
})
export class InitiateNotificationPageModule {}
