import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { ModelService } from './model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cms';
  public article!: Article;
  public allArticles: Article[] = [];

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
    this.article = this.modelService.getFeaturedArticle();
    this.allArticles = this.modelService.getUnfeaturedArticles();
    console.log(this.article);
  }
}
