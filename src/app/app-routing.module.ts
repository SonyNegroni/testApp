import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component:AppComponent, children:[
    {path:'', redirectTo: 'log-in', pathMatch: 'full'},
    { path: 'log-in', component:LogInComponent} 
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }