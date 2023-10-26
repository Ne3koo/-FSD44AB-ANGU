import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SiteSettings } from './siteSettings';

@Injectable({
  providedIn: 'root'
})
export class SiteSettingsService {
  private apiUrl = 'http:localhost::3000/api/'

  constructor(private http: HttpClient) {}
  

  getSiteSettings(): Observable<SiteSettings> {
    return this.http.get<SiteSettings>(`${this.apiUrl}/site-settings`);
  }

  updateFeaturedArticle(articleId: string): Observable<SiteSettings> {
    const body = { featured_article: articleId };
    return this.http.put<SiteSettings>(`${this.apiUrl}/site-settings`, body);
  }
}
