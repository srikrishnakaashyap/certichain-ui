import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  CertificatesData : any[] = [];

  cid : any;

  public shoud_open : any;

  constructor(private router: Router,
              private route: ActivatedRoute) {

    this.route.params.subscribe(
      params => this.cid = params['cid']
    );

   }

  ngOnInit(): void {

    this.CertificatesData[0] = ["Transcripts", "View"];
    this.CertificatesData[1] = ["MarkSheets", "View2"];
    this.CertificatesData[2] = ["GradeSheets", "View2"];
    this.CertificatesData[3] = ["Grade Memo", "View2"];
    this.CertificatesData[4] = ["Garduation Memo", "View2"];

  }


  viewCertificate(certficateId : string){

    this.shoud_open = true;

    console.log("should open--"+ this.shoud_open);

    console.log("view certificate--"+ certficateId);

  }

  LinktoCity(city: string){        
    let mainLink = "www..."
    window.open(mainLink+city);
  }





}
