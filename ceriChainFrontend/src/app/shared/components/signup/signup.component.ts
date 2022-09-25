import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { allvalidators } from '../../anyform.validators';
import { AuthServiceService } from '../../auth-service.service';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isWrongUser = false;
  isPassWrong = false;

  data:any

  form = new FormGroup({
    email: new FormControl('', [Validators.required, allvalidators.validateEmail]),
    password: new FormControl('', Validators.required)
  });

  // form = this.formBuilder.group({
  //   email: '',
  //   password: ''
  // });

  get email(){
    return this.form.get("email");
  }

  get password(){
    return this.form.get("password");
  }

  constructor( private router: Router, 
                private dataService : DataService
                ) { }

  ngOnInit(): void {

    function test(){
      console.log("resppppp-");
    }

    
  }

  onSubmit(){
  console.log("here");
  }


  login(){

    console.log("resppppp-");
    if(this.form.valid){
      // this.authService.login(this.form.value).subscribe((result) => {

        // console.log(result)

      //   if(result.success){
      //     this.data = result
      //     console.log("here1")
          
      //     localStorage.setItem('token', this.data.token)
      //     console.log("here2")
      //     this.isWrongUser = false
      //     this.isPassWrong = false
      //     this.router.navigateByUrl('/plan');
      //     console.log("here3")
      //   }
      //   else{
      //     if(result.message == "1"){
      //       this.isWrongUser = true
      //       this.isPassWrong = false
      //     }
      //     if(result.message == "2"){
      //       this.isWrongUser = false
      //       this.isPassWrong = true
      //     }
          
      // }
      //})


      //const response = this.dataService.validateCredentials(this.form.get("email"), this.form.get("password"));

      //console.log("resp--"+ response);

    }

    console.log("resppppp-");

    var emailId = (<HTMLInputElement>document.getElementById("email")).value; 
    var password = (<HTMLInputElement>document.getElementById("password")).value; 


    const response = this.dataService.validateCredentials(emailId, password).subscribe((result) =>{
      console.log("res--"+ result.token);
      console.log("res--"+ result.status);
      console.log("res--"+ result.role);

      localStorage.setItem('token',result.token);


      //result.role = 400;

      if(result.role == "250"){

        this.router.navigateByUrl('/admin');

      }else{
        this.router.navigateByUrl('/dashboard');
      }
    });

    //console.log("resp--"+ response.to);

    //console.log(JSON.stringify(response));
  }

  test(){
    console.log("resppppp-");

  }

  routeToRegister(){

    this.router.navigateByUrl('/register');

  }


}
