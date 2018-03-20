import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaveBillPage } from './leave-bill';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LeaveBillPage,
  ],
  imports: [
    IonicPageModule.forChild(LeaveBillPage),
    ComponentsModule,
  ],
})
export class LeaveBillPageModule {}
