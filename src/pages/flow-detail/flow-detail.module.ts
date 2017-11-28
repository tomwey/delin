import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlowDetailPage } from './flow-detail';

@NgModule({
  declarations: [
    FlowDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FlowDetailPage),
  ],
})
export class FlowDetailPageModule {}
