import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateDataComponent } from './shared/components/certificate-data/certificate-data.component';
import { CertificatesComponent } from './shared/components/certificates/certificates.component';

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
  // }
];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'certificate-data/:cid', component: CertificateDataComponent},
    //{path: 'certificates', component: CertificatesComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
