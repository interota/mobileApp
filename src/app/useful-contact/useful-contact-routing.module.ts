import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsefulContactPage } from './useful-contact.page';

const routes: Routes = [
  {
    path: '',
    component: UsefulContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsefulContactPageRoutingModule {}
