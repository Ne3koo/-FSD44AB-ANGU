import { Component } from '@angular/core';


// Importez la définition de la classe et les pâtisseries
import { Pastrie } from '../pastrie';
import { PASTRIES } from '../mock-pastries';
import { PastrieService } from '../pastrie.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent {
  allPastries: Pastrie[] = [];
  pastries: Pastrie[] = [];
  selectedPastrie?: Pastrie;
  chosenPastries: Pastrie[] = [];
  currentPageIndex:number = 0;
  
  constructor(
    private pastrieService: PastrieService,
    private route: ActivatedRoute) {
    
  }
  
  ngOnInit() {
    this.pastrieService.getPastries()
    .subscribe(
      result => {
        this.allPastries = result;
        this.pastries = this.allPastries.slice(0, PastrieService.PASTRIES_PER_PAGE);
        
        this.route.paramMap.subscribe((paramMap: ParamMap) => this.onParamMapChanged(paramMap));
        this.onParamMapChanged(this.route.snapshot.paramMap);
      }
    )
  }

  onParamMapChanged(paramMap: ParamMap) {
    if (paramMap.get('index') !== null && this.allPastries) {
      let iPage: number = parseInt(paramMap.get('index') as  string);
      if (iPage >= 0 && iPage < this.allPastries.length / PastrieService.PASTRIES_PER_PAGE) {
        this.currentPageIndex = iPage;
        this.pastries = this.allPastries.slice(
          iPage * PastrieService.PASTRIES_PER_PAGE,
          (iPage + 1) * PastrieService.PASTRIES_PER_PAGE
          );
      }
    }
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
