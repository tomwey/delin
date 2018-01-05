import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrthoticsFormPage } from './orthotics-form';

@NgModule({
  declarations: [
    OrthoticsFormPage,
  ],
  imports: [
    IonicPageModule.forChild(OrthoticsFormPage),
  ],
})
export class OrthoticsFormPageModule {}
