import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAuditPage } from './my-audit';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MyAuditPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAuditPage),
    ComponentsModule,
  ],
})
export class MyAuditPageModule {}
