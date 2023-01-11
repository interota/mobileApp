import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantsContactPage } from './participants-contact.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipantsContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipantsContactPageRoutingModule {}
