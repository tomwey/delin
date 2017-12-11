import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CloudZonePage } from './cloud-zone';

@NgModule({
  declarations: [
    CloudZonePage,
  ],
  imports: [
    IonicPageModule.forChild(CloudZonePage),
  ],
})
export class CloudZonePageModule {}
