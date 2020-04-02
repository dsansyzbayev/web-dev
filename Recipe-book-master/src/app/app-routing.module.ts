import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from '../app/log-in/log-in.component';
import { SignUpComponent } from '../app/sign-up/sign-up.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {ProfileDetailComponent} from './profile-detail/profile-detail.component';
import {MyRecipesComponent} from './my-recipes/my-recipes.component';
import {SavedRecipesComponent} from './saved-recipes/saved-recipes.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'signup', component: SignUpComponent},
  { path: 'login', component: LogInComponent},
  { path: 'main', component: MainPageComponent},
  { path: 'recipe/:recipeId/details', component: RecipeDetailsComponent},
  { path: 'profile', component: UserProfileComponent},
  { path: 'profile/details', component: ProfileDetailComponent},
  { path: 'profile/my-recipes', component: MyRecipesComponent},
  { path: 'profile/saved-recipes', component: SavedRecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
