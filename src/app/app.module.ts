import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire/compat";

import { FirebaseService } from './services/firebase.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ListentriesComponent } from './listentries/listentries.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditentryComponent } from './editentry/editentry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table' 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginpageComponent,
    ListentriesComponent,
    EditentryComponent
  ],
  imports: [
    MatSortModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB74kJxYsgCFTlBkgESQUWxW1XNqe5rYrs",
      authDomain: "fiber-app-a602b.firebaseapp.com",
      databaseURL: "https://fiber-app-a602b-default-rtdb.firebaseio.com",
      projectId: "fiber-app-a602b",
      storageBucket: "fiber-app-a602b.appspot.com",
      messagingSenderId: "283919643720",
      appId: "1:283919643720:web:0c40f110df89209877147d"
    }),
    BrowserAnimationsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
