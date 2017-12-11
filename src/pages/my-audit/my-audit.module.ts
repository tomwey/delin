import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAuditPage } from './my-audit';

@NgModule({
  declarations: [
    MyAuditPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAuditPage),
  ],
})
export class MyAuditPageModule {}
