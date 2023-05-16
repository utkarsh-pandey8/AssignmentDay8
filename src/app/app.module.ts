import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DepartmentComponent } from './components/department/department.component';
// import { EmployeeComponent } from './components/employee/employee.component';

import {myRoutingComponents} from './app-routing.module';
// import { DefaultComponent } from './components/default/default.component';
// import { NotFoundComponent } from './components/not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    myRoutingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
