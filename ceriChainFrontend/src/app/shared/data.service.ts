import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // getCertificatesData() : any{

  //   const apiUrl  = environment.BACKEND_URL;

  //   return this.http.get('https://api.covid19api.com/summary');
  // }

  
  validateCredentials(emailId : any, password: any) : Observable<any>{

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    //const headers = { 'content-type': 'x-www-form-urlencoded'};

    console.log("email-11-"+ emailId);

    console.log("password-11-"+ password);

    let body = new URLSearchParams();
    body.set('emailId', emailId);
    body.set('password', password);

    const formData = new FormData();

  // append your data
    formData.append('emailId', emailId);
    formData.append('password', password);
    //formData.append('myKey3', true);

    const apiUrl  = environment.BACKEND_URL;

    console.log("url--"+ apiUrl);

    console.log("formData--"+ formData);

    const payload1 = new HttpParams()
  .set('emailId', emailId)
  .set('password', password);

//this.http.post(url, payload);

    //const body = { emailId: emailId,  password : password};

    //console.log("body--"+ body.emailId);

    //const body=JSON.stringify(person);

    //console.log("body--respp--"+ this.http.post(apiUrl+"/login", body, options));
    
    return this.http.post(apiUrl+"/login", payload1);

  }

  signUp(firstName : any, lastName : any, emailId : any, password: any, role : any) : Observable<any>{

    


    

    let body = new URLSearchParams();
    body.set('emailId', emailId);
    body.set('password', password);

    const formData = new FormData();

  // append your data
    formData.append('emailId', emailId);
    formData.append('password', password);
    //formData.append('myKey3', true);

    const apiUrl  = environment.BACKEND_URL;

    console.log("url--"+ apiUrl);

    console.log("formData--"+ formData);

    const payload1 = new HttpParams()
    .set('firstName', firstName)
    .set('lastName', lastName)
  .set('emailId', emailId)
  .set('password', password)
  .set('role', role);

//this.http.post(url, payload);

    //const body = { emailId: emailId,  password : password};

    //console.log("body--"+ body.emailId);

    //const body=JSON.stringify(person);

    //console.log("body--respp--"+ this.http.post(apiUrl+"/login", body, options));
    
    return this.http.post(apiUrl+"/signup", payload1);

  }

  search(query : any, queryType : any) : Observable<any>{

    const apiUrl  = environment.BACKEND_URL;

    console.log("url--"+ apiUrl);

    const payload1 = new HttpParams()
    .set('query', query)
    .set('queryType', queryType);
    
    return this.http.post(apiUrl+"/search", payload1);

  }

  getStudentsData(token : any) : Observable<any>{

    //const token = localStorage.getItem('token');

    //let header = new HttpHeaders().set("x-access-token", headers).set("Content-Type", "application/x-www-form-urlencoded");

    //const headers = { 'content-type': 'x-www-form-urlencoded'};

    const apiUrl  = environment.BACKEND_URL;

    const payload1 = new HttpParams()
    .set('token', token);
    //.set('queryType', queryType);
    
    return this.http.post(apiUrl+"/studentdashboard", payload1);

  }

  getCertificateData(cid : any): Observable<any>{

    const apiUrl  = environment.BACKEND_URL;

    const payload1 = new HttpParams()
    .set('cid', cid);
    //.set('queryType', queryType);
    
    return this.http.post(apiUrl+"/filecontents", payload1);

  }

  getAdminCertificateData(id : any) : Observable<any>{

    const apiUrl  = environment.BACKEND_URL;

    console.log("url--"+ apiUrl);

    const payload1 = new HttpParams()
    .set('id', id);

    return this.http.post(apiUrl+"/cert", payload1);

  }
  
}
