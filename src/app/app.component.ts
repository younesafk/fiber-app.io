import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public firebaseService: FirebaseService){}

  ngOnInit() {
    this.firebaseService.isLoggedIn=false;
    console.log('heloow');
  }
  title = 'fiber-app';
  entryform: FormGroup;
  
}
