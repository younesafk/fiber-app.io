import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EntryService } from '../entry.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public entryform: FormGroup;

  @Output() isLogout=new EventEmitter<void>()
  
  constructor(
    public entryservice:EntryService,
    public formBuilder: FormBuilder,
    public router: Router,
    public firebaseService: FirebaseService
  ){
    this.entryform= formBuilder.group({
      id:[''],
      date:[''],
      name:[''],
      client:[''],
      SIP:[],
      Situation:[''],
      Commentaire:['']
      
    })
  }

  ngOnInit(){

  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }
  onSubmit() {
      this.entryservice.createentrey(this.entryform.value);
      this.router.navigate(['listentries']);
    };
}
