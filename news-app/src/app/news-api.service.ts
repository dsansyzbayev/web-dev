import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key = '12f2963f81654df09de29d196392dd4a';

  constructor(private http:HttpClient) { }
  initSources(){
    return this.http.get('htts://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }

  initArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }

  getArticlesByID(source:String){
    return this.http.get('https:newsapi.org/v2/top-headlines?sources='+ source+'&apiKey='+ this.api_key);
  }
}
