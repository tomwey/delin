import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CloudZoneDetailPage } from './cloud-zone-detail';

@NgModule({
  declarations: [
    CloudZoneDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CloudZoneDetailPage),
  ],
})
export class CloudZoneDetailPageModule {}
