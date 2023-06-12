import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './public/register/register.component';
import { CalendarComponent } from './secure/calendar/calendar.component';
import { ProfileComponent } from './secure/profile/profile.component';
import { mealsComponent } from './secure/meals/meals.component';
import { BasicAuthInterceptor } from './service/basicAuthInterceptor.service';
import { EditProfileComponent } from './secure/edit-profile/edit-profile.component';
import { CreatemealComponent } from './secure/meals/create-meal/create-meal.component';
import { ViewmealComponent } from './secure/meals/view-meal/view-meal.component';
import { EditmealComponent } from './secure/meals/edit-meal/edit-meal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    CalendarComponent,
    ProfileComponent,
    mealsComponent,
    EditProfileComponent,
    CreatemealComponent,
    ViewmealComponent,
    EditmealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
