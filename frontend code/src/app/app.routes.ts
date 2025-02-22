import { Routes } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CustomerReportsComponent } from './components/customer-reports/customer-reports.component';
import { CustomerPostsComponent } from './components/customer-posts/customer-posts.component';
import { CustomerPmComponent } from './components/customer-pm/customer-pm.component';
import { AdminPostsComponent } from './components/admin-posts/admin-posts.component';
import { AdminReportsComponent } from './components/admin-reports/admin-reports.component';
import { CustomerUnionReportsComponent } from './components/customer-union-reports/customer-union-reports.component';
import { CustomerUnionPostsComponent } from './components/customer-union-posts/customer-union-posts.component';
import { CustomerMypostsComponent } from './components/customer-myposts/customer-myposts.component';
import { CustomerMyreportsComponent } from './components/customer-myreports/customer-myreports.component';
import { CutomerPostCommentsComponent } from './components/cutomer-post-comments/cutomer-post-comments.component';
import { CutomerReportCommentsComponent } from './components/cutomer-report-comments/cutomer-report-comments.component';
import { AdminReportCommentsComponent } from './components/admin-report-comments/admin-report-comments.component';
import { AdminPostCommentsComponent } from './components/admin-post-comments/admin-post-comments.component';

export const routes: Routes = [
    {
        path: '' , component: AuthenticationComponent, children: [
            {
                path: '',component: LoginComponent
            },
            {
                path:'login', component : LoginComponent
            },
            {
                path:'sign-up', component : SignupComponent
            }
        ]
    },
    {
        path:'admin-report-comments', component: AdminReportCommentsComponent
    },
    {
        path: 'admin', component: AdminComponent, children:[
            {
                path:'', component: AdminReportsComponent
            },
            {
                path:'admin-reports', component: AdminReportsComponent
            },
            {
                path:'admin-report-comments', component: AdminReportCommentsComponent
            },
            {
                path:'admin-posts', component: AdminPostsComponent
            },
            {
                path:'admin-post-comments', component: AdminPostCommentsComponent
            },
            {
                path:'admin-pm', component: CustomerPmComponent
            }
        ]
    },
    {
        path: 'customer', component: CustomerComponent, children:[
            {
                path:'', component: CustomerUnionReportsComponent, children:[
                    {
                        path:'', component: CustomerMyreportsComponent
                    }
                ]
            },
            {
                path:'customer-reports', component: CustomerUnionReportsComponent, children:[
                    {
                        path:'', component: CustomerMyreportsComponent
                    },
                    {
                        path:'my-reports', component: CustomerMyreportsComponent
                    },
                    {
                        path:'all-reports', component: CustomerReportsComponent
                    },
                    {
                        path: 'report-comments', component: CutomerReportCommentsComponent
                    }
                ]
            },
            {
                path:'customer-posts', component: CustomerUnionPostsComponent, children:[
                    {
                        path:'', component: CustomerMypostsComponent
                    },
                    {
                        path:'my-posts', component: CustomerMypostsComponent
                    },
                    {
                        path:'all-posts', component: CustomerPostsComponent
                    },
                    {
                        path: 'post-comments', component: CutomerPostCommentsComponent
                    }
                ]
            },
            {
                path:'customer-pm', component: CustomerPmComponent
            }
        ]
    }
];
