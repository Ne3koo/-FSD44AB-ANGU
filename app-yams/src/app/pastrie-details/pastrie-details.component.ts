import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { List, Pastrie } from '../pastrie';
import { INGREDIENTS_LISTS } from '../mock-pastries';
import { PastrieService } from '../pastrie.service';

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent {
  @Input() pastrie?: Pastrie;
  @Input() prefered: boolean = false;
  @Input() disablePreference: boolean = false;
  ingredientsList?: string[];
  currentOrder: boolean = true;
  // PastrieDetailsComponent
  @Output() changePreference: EventEmitter<string> = new EventEmitter();
  @Output() hideMe: EventEmitter<string> = new EventEmitter();

  
  constructor(private pastrieService: PastrieService) {

  }

  ngOnChanges() {
    if (this.pastrie !== undefined) {
      this.ingredientsList = [];
      const pastrieIngredientList: List | undefined =  this.pastrieService.getPastrieIngredientsList((this.pastrie as Pastrie).id);
      
      if (pastrieIngredientList) {
        this.ingredientsList = pastrieIngredientList.list.map(elt => elt);
      }

      this.currentOrder = true;
    }
  }

  modifyIngredientsOrder() {
    this.currentOrder = !this.currentOrder;
    if (this.ingredientsList) {
      this.ingredientsList.reverse();
    }
  }

  preference() {
    if (this.pastrie) {
      this.changePreference.emit(this.pastrie.id);
    }
  }

  hide() {
    if (this.pastrie) {
      this.hideMe.emit(this.pastrie.id);
    }
  }
}
