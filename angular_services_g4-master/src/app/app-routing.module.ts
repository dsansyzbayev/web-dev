import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsPAgeComponent } from './news-page/news-page.component';


const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: 'news/:newsPageId', component: NewsPAgeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
