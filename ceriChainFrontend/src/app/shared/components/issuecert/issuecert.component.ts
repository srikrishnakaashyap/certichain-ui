import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
// import { DataService } from '../../data.service';
// import jsPDF from 'jspdf';
//import html2canvas from 'html2canvas';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-issuecert',
  templateUrl: './issuecert.component.html',
  styleUrls: ['./issuecert.component.css']
})
export class IssuecertComponent implements OnInit {

  issued: boolean = false;

  resultdata : any;
  //tempData : any;

  isStudent : boolean = false;

  constructor(private authService : AuthServiceService,
              private dataService : DataService) { }

  ngOnInit(): void {

    //this.dataService.getAdminCertificateData(this.authService.getAdminCertificateId());

    //console.log("dtee--"+ this.authService.getAdminCertificateId());

    if(this.authService.getStudent() == false){

        this.issuecert();
        this.isStudent = false;}
    else{
      //this.getData();
      this.populateData();
      console.log("true-----------");
      this.isStudent = true;
    }


  }

  getData(){
    this.resultdata = this.authService.getCData();
    console.log
    //this.isDataLoaded = true;
  }

  issuecert(){
    

    // call the issuing API

    let temp = this.authService.getAdminCertificateId();

    this.dataService.getAdminCertificateData("799591008543277058").subscribe((result) =>{

      //this.results = result.searchResult;
      // result;

      //console.log("results--"+ JSON.stringify(result));

      //console.log('json--'+ JSON.parse(result));

      this.resultdata = result.searchResult;

      console.log("certi--"+ JSON.stringify(this.resultdata));

      if(result == "250"){

        //this.router.navigateByUrl('/admin');

      }else{
        //this.router.navigateByUrl('/dashboard');
      }
    });

    //this.issued = true;
    return
  }

  populateData(){

    //console.log("cid--"+ this.cid);

    //let data = this.dataService.getCertificateData(this.cid);

    this.dataService.getCertificateData("bafybeifu5waahvw3b2vir7z7hjevmlddeevkpq7xmfwaeilprlmei3vh2u").subscribe((result) =>{


      console.log("resd--"+ result);
      this.resultdata = result.fc.fileContents;

      console.log("certi--"+ this.resultdata);

      //this.isDataLoaded = true;

      if(result == "250"){

        //this.router.navigateByUrl('/admin');

      }else{
        //this.router.navigateByUrl('/dashboard');
      }
    });

    //console.log("data-11111111-"+ data);

  }

  // public openPDF(): void {
  //   let DATA: any = document.getElementById('htmlData');
  //   //let DATA = this.USERS;
  //   html2canvas(DATA).then((canvas) => {
  //     let fileWidth = 208;
  //     let fileHeight = (canvas.height * fileWidth) / canvas.width;
  //     const FILEURI = canvas.toDataURL('image/png');
  //     let PDF = new jsPDF('p', 'mm', 'a4');
  //     let position = 0;
  //     PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
  //     PDF.save('angular-demo.pdf');
  //   });
  // }

  issuecert1(){
    this.issued = true
  }

}
export class searchResult {
  id: any;
  studentId: any;
  degree: any;
  schoolName: any;
  division: any;
  year: any;
  createdAt: any;
  updatedAt: any
}

