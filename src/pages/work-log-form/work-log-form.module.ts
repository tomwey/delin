import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkLogFormPage } from './work-log-form';

@NgModule({
  declarations: [
    WorkLogFormPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkLogFormPage),
  ],
})
export class WorkLogFormPageModule {}
