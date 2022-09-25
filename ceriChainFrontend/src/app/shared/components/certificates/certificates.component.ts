import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  CertificatesData : any[] = [];

  cid : any;

  public shoud_open : any;

  constructor(public router: Router,
              private route: ActivatedRoute,
              private dataService : DataService) {

  }

  

  ngOnInit(): void {

    //this.CertificatesData = this.dataService.getCertificatesData();

    this.CertificatesData[0] = ["Transcripts", "1234"];
    this.CertificatesData[1] = ["MarkSheets", "575757"];
    this.CertificatesData[2] = ["GradeSheets", "32332"];
    this.CertificatesData[3] = ["Grade Memo", "98989"];
    this.CertificatesData[4] = ["Garduation Memo", "46464"];

  }


  viewCertificate(certficateId : string){

    this.shoud_open = true;

    console.log("should open--"+ this.shoud_open);

    console.log("view certificate--"+ certficateId);

  }





}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
