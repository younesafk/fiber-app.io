import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit{

    title = 'fiber-app';
    entryform: FormGroup;
    public isSignedIn = false
    constructor(public firebaseService: FirebaseService){
      
    }
    ngOnInit() {
      if(localStorage.getItem('user')!== null)
      this.isSignedIn = true
      else
      this.isSignedIn=false
    }
  
    async onSignup(email:string ,password: string){
      await this.firebaseService.signup(email,password)
      if(this.firebaseService.isLoggedIn)
      this.isSignedIn=true
    }
//     ValidateEmail(email) {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
//     {
//       return (true)
//     }else
//       alert("invalid email address!")
//      return (false)
// }
  
    async onSignin(email:string ,password: string){
      await this.firebaseService.signin(email,password)
      if(this.firebaseService.isLoggedIn ) 
      this.isSignedIn=true
      
    }
    handleLogout(){
      this.isSignedIn=false
      
    }
}
