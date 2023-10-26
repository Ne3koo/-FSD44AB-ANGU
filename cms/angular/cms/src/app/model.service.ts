import { Injectable } from '@angular/core';
import { Article } from './article'; 

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  private articles: Article[] = [];

  private currentArticleId: string | null = null; 

  constructor() { }

  getFeaturedArticle(): Article {
    const randomIndex = Math.floor(Math.random() * this.articles.length);
    return this.articles[randomIndex];
  }

  getUnfeaturedArticles(): Article[] {

    if (this.currentArticleId) {
        return this.articles.filter(article => article.id !== this.currentArticleId);
    } else {
        return this.articles;
    }
  }

}
