import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Entery } from './entery.model';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  
  constructor(private angularFirestore: AngularFirestore) {}

  getEntryDoc(id){
    return this.angularFirestore
    .collection('entries-collection')
    .doc(id)
    .valueChanges()
  }

  getentrylist() {
    return this.angularFirestore.collection("entries-collection").snapshotChanges();  
  }

  createentrey(entry:Entery){
    return new Promise<any>((resolve,reject)=>{
      this.angularFirestore
        .collection("entries-collection")
        .add(entry)
        .then(response=> {console.log({entry}),console.log(response)},error=> reject(error)
        )
    });
  }

  deleteentry(entry: Entery){
    return this.angularFirestore
      .collection("entries-collection")
      .doc(entry.id)
      .delete();
  }

  updateentry(entry: Entery,id:string){
    return this.angularFirestore
      .collection("entries-collection")
      .doc(id)
      .update({
          date: entry.date,
          client: entry.client,
          sip: entry.SIP,
          situation:entry.Situation,
          commentaire: entry.Commentaire
      });
  }


}
