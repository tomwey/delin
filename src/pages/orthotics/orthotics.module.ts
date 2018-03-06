import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrthoticsPage } from './orthotics';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    OrthoticsPage,
  ],
  imports: [
    IonicPageModule.forChild(OrthoticsPage),
    ComponentsModule,
  ],
})
export class OrthoticsPageModule {}
