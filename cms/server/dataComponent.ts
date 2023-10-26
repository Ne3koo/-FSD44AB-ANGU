import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-site-data',
  templateUrl: './site-data.component.html',
  styleUrls: ['./site-data.component.css']
})
export class SiteDataComponent implements OnInit {
  siteData: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getSiteData().subscribe((data) => {
      this.siteData = data;
    });
  }
}