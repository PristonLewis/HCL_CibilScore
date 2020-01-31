import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth-guard.service';
import { 
  AuthGuardEService as AuthGuardE 
} from './services/auth-guard-e.service';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {

    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employee-detail/:id',
    component: EmployeeDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recomended',
    component: CoursesComponent,
    canActivate: [AuthGuardE]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
