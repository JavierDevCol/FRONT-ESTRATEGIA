import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from '../shared/model/Materia';

@Component({
  selector: 'app-listar-materia',
  templateUrl: './listar-materia.component.html',
  styleUrls: ['../../../../../../assets/plugins/bootstrap/css/bootstrap.min.css']
})
export class ListarMateriaComponent implements OnInit {
  public listaMaterias!: Observable<Materia[]>;

  constructor() { }

  ngOnInit() {

  }

}
