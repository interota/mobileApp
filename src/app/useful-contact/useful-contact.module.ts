import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsefulContactPageRoutingModule } from './useful-contact-routing.module';

import { UsefulContactPage } from './useful-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsefulContactPageRoutingModule
  ],
  declarations: [UsefulContactPage]
})
export class UsefulContactPageModule {}
