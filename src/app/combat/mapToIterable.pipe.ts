import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterablePipe implements PipeTransform {
  transform(map, args: string[]): Array<any> {
    let values = [];
    
    for (let name in map) {
      if (map.hasOwnProperty(name)) {
        values.push({ name, id: map[name] });
      }
    }

    return values;
  }
}
