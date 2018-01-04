import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManSearchPage } from './man-search';

@NgModule({
  declarations: [
    ManSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(ManSearchPage),
  ],
})
export class ManSearchPageModule {}
