import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OvertimeApplyPage } from './overtime-apply';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    OvertimeApplyPage,
  ],
  imports: [
    IonicPageModule.forChild(OvertimeApplyPage),
    ComponentsModule,
  ],
})
export class OvertimeApplyPageModule {}
