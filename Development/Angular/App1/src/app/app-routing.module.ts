import { NgModule } from '@angular/core';

import{Routes,RouterModule} from '@angular/router';

import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import{HomeComponent} from './home.component';
import{PageNotFoundComponent} from './page-not-found.component'


const   appRoutes : Routes = [
  {path:'home',component:HomeComponent},
  {path:'user', component:UserComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
  
})
export class AppRoutingModule { }
