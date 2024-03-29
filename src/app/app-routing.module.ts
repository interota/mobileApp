import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'first-day',
    loadChildren: () => import('./first-day/first-day.module').then( m => m.FirstDayPageModule)
  },
  {
    path: 'activity-details',
    loadChildren: () => import('./activity-details/activity-details.module').then( m => m.ActivityDetailsPageModule)
  },
  {
    path: 'participants-contact',
    loadChildren: () => import('./participants-contact/participants-contact.module').then( m => m.ParticipantsContactPageModule)
  },
  {
    path: 'my-modal',
    loadChildren: () => import('./my-modal/my-modal.module').then( m => m.MyModalPageModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then( m => m.AuthenticationPageModule)
  },
  {
    path: 'useful-contact',
    loadChildren: () => import('./useful-contact/useful-contact.module').then( m => m.UsefulContactPageModule)
  },
  {
    path: 'initiate-notification',
    loadChildren: () => import('./initiate-notification/initiate-notification.module').then( m => m.InitiateNotificationPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
