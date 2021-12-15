import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EstrategiaService } from '../shared/service/estrategia.service';

@Component({
  selector: 'app-crear-estrategia',
  templateUrl: './crear-estrategia.component.html',
  styleUrls: ['./crear-estrategia.component.css']
})
export class CrearEstrategiaComponent implements OnInit {

  public estrategiaForm: FormGroup;

  constructor(protected service: EstrategiaService, private fb: FormBuilder, private navegacion: Router) { }

  ngOnInit(): void {

    this.estrategiaForm = this.fb.group({
      nombre: ['', Validators.required ]
    })
  }

  public crearEstrategia() {
    console.log(this.estrategiaForm.value);
    this.service.crear(this.estrategiaForm.value).subscribe(
      () => {
        Swal.fire({
          title: 'Estrategia  "' + this.estrategiaForm.value.nombre + '" Creado',
          icon: 'success',
          confirmButtonText: 'Listo',
        });
        this.navegacion.navigate(['dashboard', 'estrategia','listar']);
      },
      ({ error }) => {
        Swal.fire({
          title: error.mensaje,
          text: this.estrategiaForm.value.nombre,
          icon: 'warning',
          confirmButtonText: 'Listo',
        });
      }
    );
  }

}
