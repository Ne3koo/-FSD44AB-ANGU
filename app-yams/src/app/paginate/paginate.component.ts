import { Component } from '@angular/core';
import { PastrieService } from '../pastrie.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent {
  currentPageIndex:number = 0;

  constructor(
    private pastrieService: PastrieService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.get('index') !== null) {
        let iPage: number = parseInt(paramMap.get('index') as string);
        if (iPage >= 0 && iPage < this.pastrieService.getTotalPages()) {
          this.currentPageIndex = iPage;
        }
        else {
          this.router.navigate([`pastries/${this.currentPageIndex}`]);
        }
      }
    });
  }
  
  getPreviousClass(): string {
    return `page-item ${this.currentPageIndex > 0 ? '' : 'disabled'}`;
  }
  getNextClass(): string {
    return `page-item ${this.currentPageIndex < this.pastrieService.getTotalPages() - 1 ? '' : 'disabled'}`;
  }
  getPageClass(iPage: number): string {
    return `page-item ${this.currentPageIndex === iPage ? 'disabled' : ''}`;
  }
  
  gotoPage(iPage: number) {
    if (iPage >= 0 && iPage < this.pastrieService.getTotalPages()) {
      this.currentPageIndex = iPage;
    }
  }
  gotoPreviousPage() {
    if (this.currentPageIndex > 0) {
      this.gotoPage(this.currentPageIndex - 1);
    }
  }
  gotoNextPage() {
    if (this.currentPageIndex < this.pastrieService.getTotalPages()) {
      this.gotoPage(this.currentPageIndex + 1);
    }
  }

  getPageNumbers():number[] {
    return Array(this.pastrieService.getTotalPages())
      .fill(0)
      .map((el, index) => index);
  }
}

