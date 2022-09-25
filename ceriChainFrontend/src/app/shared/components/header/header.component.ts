import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router ) { }

  dummyname = "devesh";
  //get user name from db and use it in place of dummy name as seed


  // temp = "https://avatars.dicebear.com/api/:sprites/:seed.svg";

  temp2= "https://avatars.dicebear.com/api/"; 
  
  sprites = [ "male", "female", "human", "identicon", "initials", "bottts", "avataaars", "jdenticon", "gridy", "micah"];

  random = Math.floor(Math.random() * 10);
  sprite = this.sprites[this.random];

  str = this.temp2.concat(this.sprite.toString());
  str2 = this.str.concat("/").concat(this.dummyname.toString());
  str3   = this.str2.concat(".svg");

  // avatar = "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg";
  avatar = this.str3; 
  // avatar = this.temp3;
  
  test() {
    console.log(this.avatar);
    return
  }
  

  ngOnInit(): void {
  }

  logged(){
    // return this.auth.login2()
    return true;
  }

  onclick(){
    // localStorage.removeItem('token');
    // this.route.navigate(['']);
    // return true;
  }

}
