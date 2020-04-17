import { NgModule } from '@angular/core';
import {
   MatButtonModule,
   MatButtonToggleModule,
   MatProgressSpinnerModule,
   MatIconModule,
   MatToolbarModule
   } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatToolbarModule
];

@NgModule({

  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
