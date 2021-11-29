import { Pipe, PipeTransform } from '@angular/core';
// import { Materia } from 'src/app/feature/dashboard/components/materia/shared/model/Materia';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], page: number = 0, objMostrar: number = 5): any[] {
    console.log(value);
    if(value != null)
      return value.slice(page, page + objMostrar);

  }

}
