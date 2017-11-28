import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlowPage } from './flow';

@NgModule({
  declarations: [
    FlowPage,
  ],
  imports: [
    IonicPageModule.forChild(FlowPage),
  ],
})
export class FlowPageModule {}
