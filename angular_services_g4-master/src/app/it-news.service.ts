import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IT_NEWS } from './mock-news';

@Injectable({
  providedIn: 'root'
})
export class ItNewsService {
  serviceNews = IT_NEWS;

  getNewsList(): Observable<any> {
    return of(this.serviceNews);
  }

  getNewsPageById(id): Observable<any> {
    function getNeededNewsPage(newsPage) {
      return newsPage.id === id;
    }
    const neededNewsPage = this.serviceNews.find(getNeededNewsPage);
    return of(neededNewsPage);
  }
}

