import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule , Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import{HttpClientModule} from '@angular/common/http';
import{ProductService} from './product.service';

import { FindoneComponent } from './findone/findone.component';

const routes:Routes=[
  {path:'update/:id/:name/:price',component:UpdateComponent},
  {path:'delete/:id',component:DeleteComponent},
  {path:'add',component:AddComponent},
  {path:'list',component:ListComponent},
  {path:'list',redirectTo:'list',pathMatch:'full'},
  {path:'find',component:FindoneComponent}
  ];
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    ListComponent,
    FindoneComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
