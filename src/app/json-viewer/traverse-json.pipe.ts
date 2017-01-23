import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traverseJson'
})
export class TraverseJsonPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return value;
    } 

    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    } 
    return keys;
  } 

}
