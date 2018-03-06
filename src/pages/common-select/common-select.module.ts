import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonSelectPage } from './common-select';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CommonSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(CommonSelectPage),
    ComponentsModule,
  ],
})
export class CommonSelectPageModule {}
