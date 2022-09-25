import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { CertificatesComponent } from './shared/components/certificates/certificates.component';
import { CertificateDataComponent } from './shared/components/certificate-data/certificate-data.component';
import { CertificateDataModule } from './shared/components/certificate-data.module';
import { CertificateDataRoutingModule } from './shared/components/certificate-data-routing.module';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './shared/components/admin/admin.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './shared/components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { IssuecertComponent } from './shared/components/issuecert/issuecert.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CertificatesComponent,
    AdminComponent,
    HeaderComponent,
    HomeComponent,
    IssuecertComponent
    //CertificateDataComponent
  ],
  imports: [
    CertificateDataRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
    //MatRadioModule
    // RouterModule.forRoot([
    //   {path: 'certificate-data', component: CertificateDataComponent}
    // ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
