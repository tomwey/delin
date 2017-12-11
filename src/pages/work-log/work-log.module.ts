import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkLogPage } from './work-log';

@NgModule({
  declarations: [
    WorkLogPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkLogPage),
  ],
})
export class WorkLogPageModule {}
