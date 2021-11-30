import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lista: any[], search: string): any[] {
    console.log("SEARCH " + lista);
    if (search.length === 0) {
      return lista;
    }
    const filteredLista = lista.filter( list => list.name.includes( search ));
    return filteredLista;
  }

}
