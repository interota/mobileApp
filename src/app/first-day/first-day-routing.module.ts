import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstDayPage } from './first-day.page';

const routes: Routes = [
  {
    path: '',
    component: FirstDayPage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstDayPageRoutingModule {}
