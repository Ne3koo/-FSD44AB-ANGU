import { Component, Input } from '@angular/core';
import { PastrieService } from '../pastrie.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Pastrie } from '../pastrie';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent {
  currentPageIndex:number = 0;

  @Input() pastries?: Pastrie[];

  constructor(
    private pastrieService: PastrieService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => this.onParamMapChanged(paramMap));
    this.onParamMapChanged(this.route.snapshot.paramMap);
  }

  onParamMapChanged(paramMap: ParamMap) {
    if (paramMap.get('index') !== null) {
      let iPage: number = parseInt(paramMap.get('index') as string);
      if (this.pastries && this.pastries.length) {
        if (iPage >= 0 && iPage < this.pastries.length / PastrieService.PASTRIES_PER_PAGE) {
          this.currentPageIndex = iPage;
        }
        else {
          this.router.navigate([`pastries/${this.currentPageIndex}`]);
        }
      }
    }
  }
  
  getPreviousClass(): string {
    return `page-item ${this.currentPageIndex > 0 ? '' : 'disabled'}`;
  }
  getNextClass(): string {
    if (this.pastries && this.pastries.length) {
      return `page-item ${this.currentPageIndex < (this.pastries.length / PastrieService.PASTRIES_PER_PAGE) - 1 ? '' : 'disabled'}`;
    } else {
      return 'disabled';
    }
  }
  getPageClass(iPage: number): string {
    return `page-item ${this.currentPageIndex === iPage ? 'disabled' : ''}`;
  }
  
  gotoPage(iPage: number) {
    if (this.pastries 
      && this.pastries.length 
      && iPage >= 0 
      && iPage < this.pastries.length / PastrieService.PASTRIES_PER_PAGE) {
      this.currentPageIndex = iPage;
    }
  }
  gotoPreviousPage() {
    if (this.currentPageIndex > 0) {
      this.gotoPage(this.currentPageIndex - 1);
    }
  }
  gotoNextPage() {
    if (this.pastries 
      && this.pastries.length 
      && this.currentPageIndex < this.pastries.length / PastrieService.PASTRIES_PER_PAGE) {
      this.gotoPage(this.currentPageIndex + 1);
    }
  }

  getPageNumbers():number[] {
    if (this.pastries && this.pastries.length) {
      return Array(Math.ceil(this.pastries.length / PastrieService.PASTRIES_PER_PAGE))
        .fill(0)
        .map((el, index) => index);
    }
    return [];
  }
}

