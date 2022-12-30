import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Entery } from '../entery.model';
import { EntryService } from '../entry.service';
import { FirebaseService } from '../services/firebase.service';
import {MatSort,Sort} from '@angular/material/sort';
import{ MatTableModule} from '@angular/material/table';
import { CdkTableDataSourceInput, DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-listentries',
  templateUrl: './listentries.component.html',
  styleUrls: ['./listentries.component.css']
})
export class ListentriesComponent implements OnInit{


 
  Entrys: Entery[];
  isSignedIn = false

  @Input() dataSource: CdkTableDataSourceInput<Entery>;
  @Output() isLogout=new EventEmitter<void>()
  @ViewChild('empTbSort') empTbSort= new MatSort();
  
  constructor(private entryservice: EntryService, public firebaseService: FirebaseService){}
  
  
  ngOnInit(){
    this.entryservice.getentrylist().subscribe( res =>{
      this.Entrys= res.map( e => {
        return{
          id : e.payload.doc.id,
          ...e.payload.doc.data() as{}
      }as Entery;
    })
   });
  }

  
   sortData(sort: Sort) {
      const data = this.Entrys.slice();
      if (!sort.active || sort.direction === '') {
        this.Entrys = data;
        return;
        }   
        this.Entrys = data.sort((a, b) => {
          const isAsc = sort.direction === 'asc';
          switch (sort.active) {
            case 'name':
              return compare(a.name, b.name, isAsc);
            case 'client':
              return compare(a.client, b.client, isAsc);
            case 'sip':
              return compare(a.SIP, b.SIP, isAsc);
            default:
              return 0;
          }
        });
    }




    
  removeentry(entery){
    if(confirm("you sure")){
      this.entryservice.deleteentry(entery);
    }
  }

  logout(){
    this.firebaseService.logout()
    // this.isLogout.emit()
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}