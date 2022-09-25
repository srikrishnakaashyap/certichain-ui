import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { allvalidators } from '../../anyform.validators';
import { AuthServiceService } from '../../auth-service.service';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  exists: boolean = false;
  newone: boolean = false;
  data:any;

  form = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, allvalidators.validateEmail ]),
    password: new FormControl('', [Validators.required,  
      Validators.pattern( '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}')
    ]),
    
    role: new FormControl('', Validators.required)

  })

  constructor( private router: Router,
                private dataService : DataService) { }

  ngOnInit(): void {
  }

  

  // get first_name(){
  //   return this.form.get("first_name");
  // }
  // get last_name(){
  //   return this.form.get("last_name");
  // }

  // get email(){
  //   return this.form.get("email");
  // }

  // get password(){
  //   return this.form.get("password");
  // }

  // get role(){
  //   return this.form.get("role");
  // }




// Add last name, account type ( admin/student )
//  remove mobile, dob, gender

signUp(){

  console.log("sign-up");

  
  // var firstName = this.form.get("first_name"); 
  // var lastName = this.form.get("last_name"); 
  // var emailId = this.form.get("email"); 
  // var password = this.form.get("email");
  // var role = this.form.get("role");

  var firstName = (<HTMLInputElement>document.getElementById("first_name")).value; 
  var lastName = (<HTMLInputElement>document.getElementById("last_name")).value;
  var emailId = (<HTMLInputElement>document.getElementById("email")).value; 
  var password = (<HTMLInputElement>document.getElementById("email")).value; 
  var role = (<HTMLInputElement>document.getElementById("inlineRadio1")).value;


  const response = this.dataService.signUp(firstName, lastName, emailId, password, role).subscribe((result) =>{
    console.log("res--"+ result.token);
    console.log("res--"+ result.status);
    console.log("res--"+ result.role);

    //result.role = 400;

    if(role == "250"){

      this.router.navigateByUrl('/admin');

    }else{
      this.router.navigateByUrl('/dashboard');
    }
  });

  //console.log("resp--"+ response.to);

  //console.log(JSON.stringify(response));
}
}