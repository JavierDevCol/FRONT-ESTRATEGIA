import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GrupoService } from '../shared/service/grupo.service';

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.css']
})
export class CrearGrupoComponent implements OnInit {


  public grupoForm: FormGroup;

  constructor(protected service: GrupoService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.grupoForm = this.fb.group({
      nombre: ['', Validators.required ]
    })
  }

  public crearMateria() {
    console.log(this.grupoForm.value);
    this.service.crear(this.grupoForm.value).subscribe();
  }

}
