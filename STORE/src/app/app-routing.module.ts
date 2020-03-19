import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaptopsComponent } from './laptops/laptops.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {CategoriesComponent} from './categories/categories.component';
import {CategoryDetailsComponent} from './category-details/category-details.component'
import { EarbudsComponent } from './earbuds/earbuds.component';
import { SmartwatchComponent } from './smartwatch/smartwatch.component';


const routes: Routes = [
  {path: 'laptops' , component: LaptopsComponent},
  {path: 'mobiles' , component: MobilesComponent},
  {path: 'earbuds' , component: EarbudsComponent},
  {path: 'smarthwatches' , component : SmartwatchComponent},
  {path: 'categories' , component: CategoriesComponent},
  {path: 'categories/1' , component: EarbudsComponent},
  {path: 'categories/2' , component: SmartwatchComponent},
  {path: 'categories/3' , component: MobilesComponent},
  {path: 'categories/4' , component: LaptopsComponent},
  {path: '', redirectTo: 'categories', pathMatch: 'full'},
  {path: 'laptops/:laptopId', component: ProductDetailComponent},
  {path: 'mobiles/:mobileId', component: ProductDetailComponent},
  {path: 'earbuds/:earbudId', component: ProductDetailComponent},
  {path: 'smarthwatches/:smartwatchId', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
