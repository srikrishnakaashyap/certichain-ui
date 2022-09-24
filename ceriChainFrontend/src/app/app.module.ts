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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CertificatesComponent,
    CertificateDataComponent
  ],
  imports: [
    CertificateDataRoutingModule,
    BrowserModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   {path: 'certificate-data', component: CertificateDataComponent}
    // ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
