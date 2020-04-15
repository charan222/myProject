import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormComponent } from './form/form.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { Form2Component } from './form2/form2.component';

const routes: Routes = [
  {
    path : '',
    component:HomeComponent,
    children:[
      {
        path:'employee',
        component: EmployeeComponent
      },
      {
        path:'form',
        component: Form2Component
      },
      {
        path:'admin',
        component: AdminComponent
      },
      {
        path:'home',
        component: HeaderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
