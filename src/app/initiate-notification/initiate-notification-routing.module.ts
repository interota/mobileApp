import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitiateNotificationPage } from './initiate-notification.page';

const routes: Routes = [
  {
    path: '',
    component: InitiateNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitiateNotificationPageRoutingModule {}
