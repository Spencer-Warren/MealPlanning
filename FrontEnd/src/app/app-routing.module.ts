import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';
import { RegisterComponent } from './public/register/register.component';
import { CalendarComponent } from './secure/calendar/calendar.component';

const routes: Routes = [
  // public routes
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  
  // secure routes
  { path: 'calendar', component: CalendarComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
