import { Component } from '@angular/core';


// Importez la définition de la classe et les pâtisseries
import { Pastrie } from '../pastrie';
import { PASTRIES } from '../mock-pastries';
import { PastrieService } from '../pastrie.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent {
  pastries: Pastrie[] = [];
  selectedPastrie?: Pastrie;
  chosenPastries: Pastrie[] = [];
  currentPageIndex:number = 0;
  
  constructor(
    private pastrieService: PastrieService,
    private route: ActivatedRoute) {
    
  }
  
  ngOnInit() {
    this.pastries = this.pastrieService.getPastriesPage(this.currentPageIndex);

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.get('index') !== null) {
        let iPage: number = parseInt(paramMap.get('index') as  string);
        if (iPage >= 0 && iPage < this.pastrieService.getTotalPages()) {
          this.currentPageIndex = iPage;
          this.pastries = this.pastrieService.getPastriesPage(this.currentPageIndex);
        }
      }
    });
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
}
