import { Component } from '@angular/core';


// Importez la définition de la classe et les pâtisseries
import { Pastrie } from '../pastrie';
import { PASTRIES } from '../mock-pastries';
import { PastrieService } from '../pastrie.service';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent {
  titlePage: string = "Page principale : liste des pâtisseries à gagner";
  pastries: Pastrie[] = [];
  selectedPastrie?: Pastrie;
  chosenPastries: Pastrie[] = [];
  currentPageIndex:number = 0;
  
  constructor(private pastrieService: PastrieService) {
    
  }
  
  ngOnInit() {
    this.pastries = this.pastrieService.getPastriesPage(this.currentPageIndex);
  }
  
  onSelect(pastrie: Pastrie) {
    this.selectedPastrie = pastrie;
  }
  
  onPastrieChoice() {
    if (this.selectedPastrie) {
      if (this.chosenPastries.includes(this.selectedPastrie)) {
        this.chosenPastries.splice(this.chosenPastries.indexOf(this.selectedPastrie), 1);
      } else if (this.chosenPastries.length < 3) {
        this.chosenPastries.push(this.selectedPastrie);
      }
    }    
  }
  
  isPastriePrefered(pastrie?: Pastrie) {
    if (pastrie) {
      return this.chosenPastries.includes(pastrie);
    }
    return false;
  }
  
  isPreferenceDisabled() {
    return this.chosenPastries.length >= 3;
  }
  
  gotoPage(iPage: number) {
    if (iPage >= 0 && iPage < this.pastrieService.getTotalPages()) {
      this.pastries = this.pastrieService.getPastriesPage(iPage);
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

  getPreviousClass(): string {
    return `page-item ${this.currentPageIndex > 0 ? '' : 'disabled'}`;
  }
  getNextClass(): string {
    return `page-item ${this.currentPageIndex < this.pastrieService.getTotalPages() - 1 ? '' : 'disabled'}`;
  }
  getPageClass(iPage: number): string {
    return `page-item ${this.currentPageIndex === iPage ? 'disabled' : ''}`;
  }
}
