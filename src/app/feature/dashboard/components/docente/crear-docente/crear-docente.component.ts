import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DocenteService } from '../shared/service/docente.service';

@Component({
  selector: 'app-crear-docente',
  templateUrl: './crear-docente.component.html',
  styleUrls: ['./crear-docente.component.css']
})
export class CrearDocenteComponent implements OnInit {

  public docenteForm: FormGroup;

  constructor(protected service: DocenteService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.docenteForm = this.fb.group({
      nombre: ['', Validators.required ]
    })
  }

  public crearDocente() {
    console.log(this.docenteForm.value);
    this.service.crear(this.docenteForm.value).subscribe();
  }
}
