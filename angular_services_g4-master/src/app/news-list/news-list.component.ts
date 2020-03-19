import { Component, OnInit } from '@angular/core';
import { ItNewsService } from '../it-news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  componentNews: any = [];

  constructor(public itNewsService: ItNewsService) { }

  ngOnInit(): void {
    this.getNewsFromService();
  }

  getNewsFromService() {
    const itNewsObservable = this.itNewsService.getNewsList();
    // const _this = this;
    // function updateNews(newsForComponent) {
    //   _this.componentNews = newsForComponent;
    // }
    itNewsObservable.subscribe(newsForComponent => this.componentNews = newsForComponent);
  }
}
