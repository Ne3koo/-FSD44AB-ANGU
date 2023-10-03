import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends TitleStrategy{

  public get pageTitle(): string {
    return this.title.getTitle();
  }

  constructor(
    public readonly title: Title,
    private route: ActivatedRoute, // récupérez le service route
  ) {
    super();
  }
  
  override updateTitle(snapshot: RouterStateSnapshot): void {
    this.title.setTitle(this.getResolvedTitleForRoute(this.route.snapshot));
  }
}
