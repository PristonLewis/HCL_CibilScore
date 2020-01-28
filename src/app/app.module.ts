import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './module/home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {ChartModule} from 'primeng/chart';
import { CommonService } from './services/common-service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
