import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectSearchPage } from './select-search';

@NgModule({
  declarations: [
    SelectSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectSearchPage),
  ],
})
export class SelectSearchPageModule {}
