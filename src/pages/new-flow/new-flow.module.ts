import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewFlowPage } from './new-flow';

@NgModule({
  declarations: [
    NewFlowPage,
  ],
  imports: [
    IonicPageModule.forChild(NewFlowPage),
  ],
})
export class NewFlowPageModule {}
