import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { DataService } from '../../data.service';
import { AuthServiceService } from '../../auth-service.service';

@Component({
  selector: 'app-certificate-data',
  templateUrl: './certificate-data.component.html',
  styleUrls: ['./certificate-data.component.css']
})
export class CertificateDataComponent implements OnInit {

  cid : any;
  //ev: EventModel;

  constructor(public router: Router, private route: ActivatedRoute,
              private dataService : DataService,
              private authService : AuthServiceService) {
                
                

  }

  //certificateData : 

  //Dummy data
  tempData : any;

  isDataLoaded : boolean = false;

  ngOnInit(): void {

    //this.populateData().then(event => this.ev = event);
    //this.populateData().event(this.eventId).then(event => this.ev = event);

    //this.cid = this.authService.getCid();
    // this.getData().then(() =>
    //     this.isDataLoaded = true);

    this.getData();

    //this.router.navigate(['/certificate-data']);
    
    //this.populateData();
  }

  getData(){
    this.tempData = this.authService.getCData();
    this.isDataLoaded = true;
  }

  populateData(){

    console.log("cid--"+ this.cid);

    //let data = this.dataService.getCertificateData(this.cid);

    this.dataService.getCertificateData("bafybeifu5waahvw3b2vir7z7hjevmlddeevkpq7xmfwaeilprlmei3vh2u").subscribe((result) =>{

      this.tempData = result.fc.fileContents;

      //console.log("certi--"+ this.CertificatesData);

      this.isDataLoaded = true;

      if(result == "250"){

        //this.router.navigateByUrl('/admin');

      }else{
        //this.router.navigateByUrl('/dashboard');
      }
    });

    //console.log("data-11111111-"+ data);

  }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    //let DATA = this.USERS;
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('l', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
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
