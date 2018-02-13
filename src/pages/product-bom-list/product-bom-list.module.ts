import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductBomListPage } from './product-bom-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProductBomListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductBomListPage),
    ComponentsModule,
  ],
})
export class ProductBomListPageModule {}
