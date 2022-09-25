import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateDataRoutingModule } from './certificate-data-routing.module';
import { CertificateDataComponent } from './certificate-data/certificate-data.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';
import { IssuecertComponent } from './issuecert/issuecert.component';


@NgModule({
  declarations: [
    CertificateDataComponent,
    //IssuecertComponent,
    //HomeComponent,
    //HeaderComponent,
    //AdminComponent,
    //SignupComponent
  ],
  imports: [
    CommonModule,
    CertificateDataRoutingModule
  ]
})
export class CertificateDataModule { }
