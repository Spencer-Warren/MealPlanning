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
import { RecipesComponent } from './secure/recipes/recipes.component';
import { BasicAuthInterceptor } from './service/basicAuthInterceptor.service';
import { EditProfileComponent } from './secure/edit-profile/edit-profile.component';
import { CreateRecipeComponent } from './secure/recipes/create-recipe/create-recipe.component';
import { ViewRecipeComponent } from './secure/recipes/view-recipe/view-recipe.component';
import { EditRecipeComponent } from './secure/recipes/edit-recipe/edit-recipe.component';

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
    RecipesComponent,
    EditProfileComponent,
    CreateRecipeComponent,
    ViewRecipeComponent,
    EditRecipeComponent
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
