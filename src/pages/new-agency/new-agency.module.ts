import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewAgencyPage } from './new-agency';

@NgModule({
  declarations: [
    NewAgencyPage,
  ],
  imports: [
    IonicPageModule.forChild(NewAgencyPage),
  ],
})
export class NewAgencyPageModule {}
