import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Grupo } from '../../grupo/shared/model/Grupo';
import { GrupoService } from '../../grupo/shared/service/grupo.service';
import { Materia } from '../../materia/shared/model/Materia';
import { MateriaService } from '../../materia/shared/service/materia.service';
import { ClaseHttpService } from '../shared/service/clase-http.service';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.css']
})
export class CrearClaseComponent implements OnInit {

  public  claseForm: FormGroup;
  public materias: Observable<Materia[]>;
  public grupos: Observable<Grupo[]>;


  constructor(
    protected service: ClaseHttpService,
    protected serviceMat: MateriaService,
    protected serviceGrupo: GrupoService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.listar();
    this.claseForm = this.fb.group({
      id: [0],
      materia: ['', Validators.required],
      grupo: ['', Validators.required],
      fecha: [Date.now()]

    })

  }

  private listar():void{
    this.materias = this.serviceMat.consultar();
    this.materias.subscribe();
    this.grupos = this.serviceGrupo.consultar();
    this.grupos.subscribe();

  }

  public crearClase() {
    console.log(this.claseForm.value);
    this.service.crear(this.claseForm.value).subscribe();
  }

}
