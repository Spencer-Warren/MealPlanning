import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';
import { RegisterComponent } from './public/register/register.component';
import { CalendarComponent } from './secure/calendar/calendar.component';
import { RecipesComponent } from './secure/recipes/recipes.component';
import { ProfileComponent } from './secure/profile/profile.component';
import { EditProfileComponent } from './secure/edit-profile/edit-profile.component';
import { CreateRecipeComponent } from './secure/recipes/create-recipe/create-recipe.component';
import { ViewRecipeComponent } from './secure/recipes/view-recipe/view-recipe.component';
import { EditRecipeComponent } from './secure/recipes/edit-recipe/edit-recipe.component';

const routes: Routes = [
  // public routes
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  
  // secure routes
  { path: 'calendar', component: CalendarComponent },

  { path: 'recipes',  component: RecipesComponent },
  { path: 'create-recipe',  component: CreateRecipeComponent},
  { path: 'view-recipe',  component: ViewRecipeComponent},
  { path: 'edit-recipe',  component: EditRecipeComponent},

  { path: 'profile',  component: ProfileComponent },
  { path: 'edit-profile',  component: EditProfileComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
