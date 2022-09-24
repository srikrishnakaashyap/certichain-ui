import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateDataComponent } from './certificate-data/certificate-data.component';

const routes: Routes = [
  {path : 'certificate-data/:cid', component : CertificateDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificateDataRoutingModule { }
