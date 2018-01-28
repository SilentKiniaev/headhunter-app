import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'townFilter'
})
export class TownFilterPipe implements PipeTransform {

  transform(towns: any, text: any): any {
    return towns.filter((town) => town.name.toLocaleLowerCase().indexOf(text.toLowerCase())!== -1);
  }

}
