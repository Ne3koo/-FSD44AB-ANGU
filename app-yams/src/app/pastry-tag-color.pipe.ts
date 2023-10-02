import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastryTagColor'
})
export class PastryTagColorPipe implements PipeTransform {

  transform(tag: string): string {
    switch (tag) {
      case "sucré":
        return "tagSweet";
      case "yummy":
        return "tagYummy";
      case "chocolat":
        return "tagChocolate";
      case "framboise":
        return "tabRaspberry";
      case "poires":
        return "tagPear";
      case "fruits":
        return "tagFruits";
      case "bananes":
          return "tagBananas";
      case "dessert":
          return "tagDessert";
      default:
        return "";
    }
  }

}
