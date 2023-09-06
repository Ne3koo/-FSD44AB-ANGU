import { Component, Input } from '@angular/core';
import { List, Pastrie } from '../pastrie';
import { INGREDIENTS_LISTS } from '../mock-pastries';

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent {
  @Input() pastrie?: Pastrie;
  ingredientsList?: string[];
  currentOrder: boolean = true;

  ngOnChanges() {
    if (this.pastrie !== undefined) {
      this.ingredientsList = [];
      const pastrieIngredientList: List | undefined =  INGREDIENTS_LISTS.find(list => (this.pastrie as Pastrie).id == list.id);
      
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
}
