import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
//import {MatRadioModule} from '@angular/material/radio';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  results: searchResult[] = [] ;
  //results : any;
  flag: boolean = true;
  visible: boolean = true;

  
  

  constructor(private dataService : DataService) { 
    //this.results = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5'];

    console.log(this.results)


  }

  ngOnInit(): void {



  }

  // searchfun(){
  //   this.flag = false;
  //   console.log("hit");
  //   this.visible = true;
  //   return;
  // }

  // searchfun() {
  //   throw new Error('Function not implemented.');


  // }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  searchfun(){

    var query = (<HTMLInputElement>document.getElementById('query')).value; 
    var queryType;

    if(document.querySelector<HTMLInputElement>('input[id="inlineRadio1"]:checked')){
      queryType = (<HTMLInputElement>document.getElementById('inlineRadio1')).value; 
    }

    if(document.querySelector<HTMLInputElement>('input[id="inlineRadio2"]:checked')){
      queryType = (<HTMLInputElement>document.getElementById('inlineRadio2')).value; 
    }

    if(document.querySelector<HTMLInputElement>('input[id="inlineRadio3"]:checked')){
      queryType = (<HTMLInputElement>document.getElementById('inlineRadio3')).value; 
    }


    console.log("query--"+ query);
    console.log("queryType--"+ queryType);


    const response = this.dataService.search(query, queryType).subscribe((result) =>{

      this.results = result.searchResult;
      // result;

      console.log("results--"+ this.results);

      if(result.role == "250"){

        //this.router.navigateByUrl('/admin');

      }else{
        //this.router.navigateByUrl('/dashboard');
      }
    });

    //console.log("resp--"+ response.to);

    //console.log(JSON.stringify(response));
  }

  // searchagain(){
  //   this.visible = false;
  //   this.flag = true;
  //   this.results = [];
  // }


  

}

export class searchResult {
  id: any;
  firstName: any;
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


// module.exports = {
//   searchFun(){
//     this.flag = false;
//     console.log("hit");
//     this.visible = true;
//     return;
//   }
// }