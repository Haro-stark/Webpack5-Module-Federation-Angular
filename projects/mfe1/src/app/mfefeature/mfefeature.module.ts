import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfeFeatureRoutes } from './mfefeature-routing.module';
import { MfefeatureComponent } from './mfefeature.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MfefeatureComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MfeFeatureRoutes)
  ]
})
export class MfefeatureModule { }
