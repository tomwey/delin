import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductBomListPage } from './product-bom-list';

@NgModule({
  declarations: [
    ProductBomListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductBomListPage),
  ],
})
export class ProductBomListPageModule {}
