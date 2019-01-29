import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ListComponent } from './products/list/list.component';
import { DetailComponent } from './products/detail/detail.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'products',
  pathMatch: 'full',
}, {
  path: "products",
  component: ProductsComponent,
  children: [{
    path: '',
    component: ListComponent
  }, {
    path: 'add',
    component: DetailComponent
  }, {
    path: 'edit/:id',
    component: DetailComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
