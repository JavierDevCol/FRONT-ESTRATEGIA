import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudianteService } from '../shared/service/estudiante.service';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent implements OnInit {

  public estudianteForm: FormGroup;

  constructor(protected service: EstudianteService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.estudianteForm = this.fb.group({
      nombre: ['', Validators.required ]
    })
  }

  public crearEstrategia() {
    console.log(this.estudianteForm.value);
    this.service.crear(this.estudianteForm.value).subscribe();
  }

}
