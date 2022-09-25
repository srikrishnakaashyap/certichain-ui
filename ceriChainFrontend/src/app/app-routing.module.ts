import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './shared/components/admin/admin.component';
import { CertificateDataComponent } from './shared/components/certificate-data/certificate-data.component';
import { CertificatesComponent } from './shared/components/certificates/certificates.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { HomeComponent } from './shared/components/home/home.component';
import { IssuecertComponent } from './shared/components/issuecert/issuecert.component';
import { SignupComponent } from './shared/components/signup/signup.component';

//const routes: Routes = [];

const routes: Routes = [

  // {
  //   path: '',
  //   redirectTo: 'certificate-data',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'certificate-data',
  //   loadChildren: () => import('./shared/components/certificate-data.module').then(m => m.CertificateDataModule)

    // {path: 'certificate-data/:cid', component: CertificateDataComponent},
    // //{path: 'certificates', component: CertificatesComponent}
    // {path: 'signup', component: SignupComponent},
    // {path: 'register', component: HomeComponent},
    // {path: 'admin', component: AdminComponent}
  // }
];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'certificate-data', component: CertificateDataComponent},
    //{path: 'certificates', component: CertificatesComponent}
    {path: 'login', component: SignupComponent},
    {path: 'issuecert', component: IssuecertComponent},
    {path: 'register', component: HomeComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '', component: SignupComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
