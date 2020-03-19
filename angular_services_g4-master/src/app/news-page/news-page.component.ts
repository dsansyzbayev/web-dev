import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItNewsService } from '../it-news.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPAgeComponent implements OnInit {
  pageNews: any;

  constructor(public itNewsService: ItNewsService, private route: ActivatedRoute, public productsService: ProductsService) { }

  ngOnInit(): void {
    this.getNewsForCurrentPage()
  }

  getNewsForCurrentPage() {
    const id = +this.route.snapshot.paramMap.get('newsPageId');
    const currentPageNewsObservable = this.itNewsService.getNewsPageById(id);
    currentPageNewsObservable.subscribe(news => this.pageNews = news)
  }

  changeTitle(newTitle) {
    this.pageNews.title = newTitle;
  }

}
