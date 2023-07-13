import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { superadminComponent } from './superadmin/superadmin.component';
import { SignupComponent } from './signup/signup.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { StickyFooterComponent } from './sticky-footer/sticky-footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TeaserComponent } from './teaser/teaser.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'superadmin',
        component: superadminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.superadmin] }
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'signup',
        component: SignupComponent
    },

    {
        path: 'login',
        component: LoginComponent
    },
    { 
        path: 'social-media', 
        component: SocialMediaComponent 
    },

    { 
        path: 'admin-dashboard', 
        component: AdminDashboardComponent 
    },
    { 
        path: 'super-admin-dashboard', 
        component: SuperAdminDashboardComponent
    },
    { 
        path: 'user-dashboard', 
        component: UserDashboardComponent
    },
    {
        path:'sticky-footer',
        component: StickyFooterComponent
    },
    {
        path:'newsletter',
        component:NewsletterComponent
    },
    {
        path:'teaser',
        component:TeaserComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
