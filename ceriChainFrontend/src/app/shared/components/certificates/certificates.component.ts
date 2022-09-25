import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  CertificatesData : searchResult[] = [];

  cid : any;

  public shoud_open : any;

  constructor(public router: Router,
              private route: ActivatedRoute,
              private dataService : DataService,
              private authService : AuthServiceService) {

  }

  

  ngOnInit(): void {

    let token = localStorage.getItem('token');

    this.getStudentsData(token);

    //this.CertificatesData = this.dataService.getCertificatesData();

    // this.CertificatesData[0] = ["Transcripts", "1234"];
    // this.CertificatesData[1] = ["MarkSheets", "575757"];
    // this.CertificatesData[2] = ["GradeSheets", "32332"];
    // this.CertificatesData[3] = ["Grade Memo", "98989"];
    // this.CertificatesData[4] = ["Garduation Memo", "46464"];

  }

  getStudentsData(token : any){

    console.log("token--"+ token);

    const response = this.dataService.getStudentsData(token).subscribe((result) =>{

      console.log("result--"+ JSON.stringify(result));

      console.log("res--"+ result.Certificates);
      console.log("res--"+ result.status);
      //console.log("res--"+ result.role);

      this.CertificatesData = result;

      console.log("CertificatesData--"+this.CertificatesData);

      if(result.role == "250"){

        this.router.navigateByUrl('/admin');

      }else{
        this.router.navigateByUrl('/dashboard');
      }
    });


  }


  viewCertificate(certficateId : string){

    this.shoud_open = true;

    console.log("should open--"+ this.shoud_open);

    console.log("view certificate--"+ certficateId);

  }

  getCertificateData(cid : any){

    this.authService.setCid(cid);

    this.populateData(cid);

    this.authService.setStudent(true);

    this.router.navigateByUrl('certificate-data');

  }

  populateData(cid : any){

    let output : any;

    console.log("cid--"+ cid);

    //let data = this.dataService.getCertificateData(this.cid);

    this.dataService.getCertificateData("bafybeifu5waahvw3b2vir7z7hjevmlddeevkpq7xmfwaeilprlmei3vh2u").subscribe((result) =>{

      this.CertificatesData = result.fc.fileContents;

      console.log("certi--"+ this.CertificatesData);

      this.authService.setCData(output);

      if(result == "250"){

        //this.router.navigateByUrl('/admin');

      }else{
        //this.router.navigateByUrl('/dashboard');
      }
    });

    //console.log("data-11111111-"+ data);

  }





}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export class searchResult {
  cid: any;
  issuer: any;
  lastName: any;
  emailId: any;
  password: any;
  role: any;
  publicKey: any;
  privateKey: any;
  accountId: any;
  token: any;
  createdAt: any;
  updatedAt: any
}
