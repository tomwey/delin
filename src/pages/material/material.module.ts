import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaterialPage } from './material';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MaterialPage,
  ],
  imports: [
    IonicPageModule.forChild(MaterialPage),
    ComponentsModule
  ],
})
export class MaterialPageModule {}
