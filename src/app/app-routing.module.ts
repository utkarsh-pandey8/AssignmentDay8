import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DefaultComponent } from './components/default/default.component';

//configure 2 routes for employee and department
const routes: Routes = [
  {
    path:'department', component:DepartmentComponent
  },
  {
    path:'employee', component:EmployeeComponent
  },
  { 
    path: '', component: DefaultComponent
  },
  { 
    path: '**', pathMatch: 'full', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//only 1 import in add.module.ts for all the components
export const myRoutingComponents = [DepartmentComponent, EmployeeComponent, NotFoundComponent, DefaultComponent]