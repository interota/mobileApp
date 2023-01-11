import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipantsContactPageRoutingModule } from './participants-contact-routing.module';

import { ParticipantsContactPage } from './participants-contact.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantsContactPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ParticipantsContactPage]
})
export class ParticipantsContactPageModule {}
