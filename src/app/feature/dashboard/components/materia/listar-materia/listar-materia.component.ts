import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from '../shared/model/Materia';
import { MateriaService } from '../shared/service/materia.service';


@Component({
  selector: 'app-listar-materia',
  templateUrl: './listar-materia.component.html',
  styleUrls: []
})
export class ListarMateriaComponent implements OnInit {

  public listaMaterias: Observable<Materia[]>;
  public desde: number = 0;
  public numberPages: number = 0;
  public endPage: number = 1;
  public objMostrar: number = 2;

  constructor(protected materiaServie: MateriaService) { }

  ngOnInit() {
    this.listaMaterias = this.materiaServie.consultar();
    this.listaMaterias.subscribe( resp => this.calcularPage(resp.length) );

  }

  public nextPage() {
    if(this.endPage < this.numberPages){
      this.desde += this.objMostrar;
      this.endPage ++;
    }

  }

  public previousPage() {
    if( this.desde > 0){
      this.desde -= this.objMostrar;
      this.endPage --;
    }

  }

  private calcularPage(totalObj: number) {
    if(totalObj === this.objMostrar)
      this.numberPages = 0;
    else
      this.numberPages = Math.round(totalObj / this.objMostrar);
  }
}
