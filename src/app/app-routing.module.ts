import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditentryComponent } from './editentry/editentry.component';
import { HomeComponent } from './home/home.component';
import { ListentriesComponent } from './listentries/listentries.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  {path :'', redirectTo:'loginpage', pathMatch:'full'},
  {path: 'loginpage', component: LoginpageComponent},
  {path: 'home', component:HomeComponent},
  {path: 'listentries', component: ListentriesComponent},
  {path: 'editentry/id',component:EditentryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
