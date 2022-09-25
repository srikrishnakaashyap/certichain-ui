import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  cid : any;
  cData : any;

  isStudent : boolean = false;

  adminCertificateId: any;
  //results: searchResult[] = [] ;

  constructor() { }

  setCid(val: any){
    this.cid = val;
  }

  getCid(){
    return this.cid;
  }

  setAdminCertificateId(val: any){
    this.adminCertificateId = val;
  }

  getAdminCertificateId(){
    return this.adminCertificateId;
  }

  setCData(val: any){
    this.cData = val;
  }

  getCData(){
    return this.cData;
  }

  setStudent(val: any){
    this.isStudent = val;
  }

  getStudent(){
    return this.isStudent;
  }


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


