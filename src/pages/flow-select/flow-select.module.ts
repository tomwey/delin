import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlowSelectPage } from './flow-select';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FlowSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(FlowSelectPage),
    ComponentsModule,
  ],
})
export class FlowSelectPageModule {}
