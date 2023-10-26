import { Component, OnInit } from '@angular/core';
import { SiteSettings } from './siteSettings';
import { SiteSettingsService } from './serviceParam';

@Component({
  selector: 'app-site-settings',
  templateUrl: './site-settings.component.html',
  styleUrls: ['./site-settings.component.css']
})
export class SiteSettingsComponent implements OnInit {
  siteSettings: SiteSettings;

  constructor(private siteSettingsService: SiteSettingsService) {}

  ngOnInit(): void {
    this.siteSettingsService.getSiteSettings().subscribe(settings => {
      this.siteSettings = settings;
    });
  }

  updateFeaturedArticle(articleId: string): void {
    this.siteSettingsService.updateFeaturedArticle(articleId).subscribe(updatedSettings => {
      this.siteSettings = updatedSettings;
    });
  }
}
