import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: "full"
  },
  // For dynamic loading we do not have to import the module in a static way like this.
  // Inface we are using lookup service in which we have defined each and everything about the remote to be loaded
  // {
  //   path: 'mfe1',
  //   loadChildren: () =>
  //     import('mfe1/MfefeatureModule').then((m) => {
  //       return m.MfefeatureModule;
  //     }),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
