import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {ChartModule} from 'primeng/chart';
import { CommonService } from './services/common-service';
import {AccordionModule} from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { CoursesComponent } from './courses/courses.component';
import { AuthService } from './services/auth.service';
import { AuthGuardEService } from './services/auth-guard-e.service';
import { AuthGuardService } from './services/auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeeDetailsComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartModule,
    AccordionModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [CommonService, AuthService, AuthGuardEService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
