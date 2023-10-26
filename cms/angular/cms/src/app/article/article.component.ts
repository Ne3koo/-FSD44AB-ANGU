import { Component, OnInit } from '@angular/core';
import { ModelService } from '../model.service';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article!: Article;
  allArticles: Article[] = [];

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
    this.article = this.modelService.getFeaturedArticle();
    this.allArticles = this.modelService.getUnfeaturedArticles();
  }
}
