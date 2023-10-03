import { Injectable } from '@angular/core';
import { INGREDIENTS_LISTS, PASTRIES } from './mock-pastries';
import { List, Pastrie } from './pastrie';

@Injectable({
  providedIn: 'root'
})
export class PastrieService {
  public static PASTRIES_PER_PAGE: number = 3;
  constructor() { }

  getPastries(): Pastrie[] {
    const sortedPastries: Pastrie[] = PASTRIES.map(pastry => pastry);
    sortedPastries.sort((a: Pastrie, b: Pastrie) => a.quantity < b.quantity ? 1 : -1);
    return sortedPastries;
  }

  getPastrie(id: string): Pastrie | undefined{
    return this.getPastries().find((pastry: Pastrie) => pastry.id === id);
  }

  getPastrieByIndex(index: number): Pastrie | undefined{
    if (index < PASTRIES.length) {
      return PASTRIES[index];
    }
    return undefined;
  }

  getPastrieIngredientsList(id: string): List | undefined {
    return INGREDIENTS_LISTS.find((list: List) => list.id === id);
  }

  count(): number {
    return PASTRIES.length;
  }

  paginate(start: number, end: number):Pastrie[]{
    return this.getPastries().slice(start, end);
  }
  
  asyncPaginate(start: number, end: number):Promise<Pastrie[]>{
    return new Promise((resolve, reject) => {
      setTimeout(() =>  resolve(this.getPastries().slice(start, end)), 1000);      
    });
  }

  getTotalPages():number {
    return Math.ceil(this.count() / PastrieService.PASTRIES_PER_PAGE);
  }

  getPastriesPage(iPage: number): Pastrie[] | never {
    if (iPage >= 0 && iPage < this.getTotalPages()) {
      return this.paginate(iPage * PastrieService.PASTRIES_PER_PAGE, (iPage + 1) * PastrieService.PASTRIES_PER_PAGE);
    }
    throw new Error("Wrong page number");
  }
}
