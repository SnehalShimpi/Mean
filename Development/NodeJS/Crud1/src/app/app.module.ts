import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material';
import{RouterModule , Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { DeleteComponent } from './components/delete/delete.component';
import { UpdateComponent } from './components/update/update.component';

const routes:Routes=[
  {path:'update/:id',component:UpdateComponent},
  {path:'delete/:id',component:DeleteComponent},
  {path:'add',component:AddComponent},
  {path:'',redirectTo:'delete/:id',pathMatch:'full'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DeleteComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
