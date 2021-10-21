import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../shared/service/materia.service';

@Component({
  selector: 'app-crear-materia',
  templateUrl: './crear-materia.component.html',
  styleUrls: ['./crear-materia.component.css']
})
export class CrearMateriaComponent implements OnInit {

  constructor(protected service: MateriaService) { }

  ngOnInit(): void {
  }

}
