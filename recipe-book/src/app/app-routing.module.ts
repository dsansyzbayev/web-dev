import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from '../app/log-in/log-in.component';
import { SignUpComponent } from '../app/sign-up/sign-up.component';
import { MainListComponent } from './main-list/main-list.component';

const routes: Routes = [
  {path:'',redirectTo: '', pathMatch:'full'},
  {path:'login',component: LogInComponent},
  {path: 'signup', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
