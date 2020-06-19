import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoModelos'
})
export class FormatoModelosPipe implements PipeTransform {

  transform(modelos: number[], ...args: any[]): any {
    let fixedValue: string;
    let cant : number = modelos.length;
    fixedValue = `[${modelos[0]}-${modelos[cant-1]}]`
    return fixedValue;
  }

}
