import { Pipe, PipeTransform } from '@angular/core';
import { Materia } from 'src/app/feature/dashboard/components/materia/shared/model/Materia';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Materia[], page: number = 0, objMostrar: number = 5): Materia[] {
console.log(value);
    if(value != null)
      return value.slice(page, page + objMostrar);

  }

}
