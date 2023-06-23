
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { roles: ['user', 'admin', 'super-admin'] } },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: ['admin', 'super-admin'] } },
  { path: 'super-admin', component: SuperAdminComponent, canActivate: [AuthGuard], data: { roles: ['super-admin'] } } ,
  { path: 'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
