import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAuditDetailPage } from './my-audit-detail';

@NgModule({
  declarations: [
    MyAuditDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAuditDetailPage),
  ],
})
export class MyAuditDetailPageModule {}
