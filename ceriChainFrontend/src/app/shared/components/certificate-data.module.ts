import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateDataRoutingModule } from './certificate-data-routing.module';
import { CertificateDataComponent } from './certificate-data/certificate-data.component';


@NgModule({
  declarations: [
    CertificateDataComponent
  ],
  imports: [
    CommonModule,
    CertificateDataRoutingModule
  ]
})
export class CertificateDataModule { }
