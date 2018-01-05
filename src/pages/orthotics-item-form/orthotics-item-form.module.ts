import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrthoticsItemFormPage } from './orthotics-item-form';

@NgModule({
  declarations: [
    OrthoticsItemFormPage,
  ],
  imports: [
    IonicPageModule.forChild(OrthoticsItemFormPage),
  ],
})
export class OrthoticsItemFormPageModule {}
