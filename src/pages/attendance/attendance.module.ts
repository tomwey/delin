import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendancePage } from './attendance';
import { CalendarModule } from "ion2-calendar";
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AttendancePage,
  ],
  imports: [
    IonicPageModule.forChild(AttendancePage),
    CalendarModule,
    ComponentsModule,
  ],
})
export class AttendancePageModule {}
