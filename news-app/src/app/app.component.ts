import { Component } from '@angular/core';
import {NewsApiService} from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';
  
  mArticles:Array<any>;
  mSources:Array<any>;

  constructor(private newsApi:NewsApiService){
    console.log('app component constructor called');
  }

  ngOnInit(){
    //load articles
    const apidata = this.newsApi.initArticles();
    apidata.subscribe((data) => {
      this.mArticles = data['articles'];
      console.log(data);
    });
    //load news sources
    const source = this.newsApi.initSources();
    source.subscribe((data) => {
      this.mSources = data['sources'];
      console.log(data);
    });
  }

  searchArticles(source){
    console.log("selected source is:" + source);
    this.newsApi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
}