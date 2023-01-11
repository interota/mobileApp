import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstDayPageRoutingModule } from './first-day-routing.module';

import { FirstDayPage } from './first-day.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstDayPageRoutingModule
  ],
  declarations: [FirstDayPage]
})
export class FirstDayPageModule {}
