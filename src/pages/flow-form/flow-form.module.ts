import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlowFormPage } from './flow-form';

@NgModule({
  declarations: [
    FlowFormPage,
  ],
  imports: [
    IonicPageModule.forChild(FlowFormPage),
  ],
})
export class FlowFormPageModule {}
