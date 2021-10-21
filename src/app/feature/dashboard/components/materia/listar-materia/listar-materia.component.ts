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

  constructor(protected materiaServie: MateriaService) { }

  ngOnInit() {
    this.listaMaterias = this.materiaServie.consultar();
  }

}
