import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';
import { RegisterComponent } from './public/register/register.component';
import { CalendarComponent } from './secure/calendar/calendar.component';
import { mealsComponent } from './secure/meals/meals.component';
import { ProfileComponent } from './secure/profile/profile.component';
import { EditProfileComponent } from './secure/edit-profile/edit-profile.component';
import { CreatemealComponent } from './secure/meals/create-meal/create-meal.component';
import { ViewmealComponent } from './secure/meals/view-meal/view-meal.component';
import { EditmealComponent } from './secure/meals/edit-meal/edit-meal.component';

const routes: Routes = [
  // public routes
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  
  // secure routes
  { path: 'calendar', component: CalendarComponent },

  { path: 'meals',  component: mealsComponent },
  { path: 'create-meal',  component: CreatemealComponent},
  { path: 'view-meal',  component: ViewmealComponent},
  { path: 'edit-meal',  component: EditmealComponent},

  { path: 'profile',  component: ProfileComponent },
  { path: 'edit-profile',  component: EditProfileComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
