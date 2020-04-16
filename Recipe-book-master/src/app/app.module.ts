import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { MainListComponent } from './main-list/main-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { BestRecipesComponent } from './best-recipes/best-recipes.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AllUsersComponent } from './all-users/all-users.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryUserService } from './in-memory-user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    MainListComponent,
    NavbarComponent,
    CategoriesComponent,
    BestRecipesComponent,
    MainPageComponent,
    RecipeDetailsComponent,
    MyRecipesComponent,
    ProfileDetailComponent,
    SavedRecipesComponent,
    UserProfileComponent,
    AllUsersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryUserService, {dataEncapsulation: false}
    )
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
