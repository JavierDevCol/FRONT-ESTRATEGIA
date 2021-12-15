import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GrupoService } from '../shared/service/grupo.service';

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.css']
})
export class CrearGrupoComponent implements OnInit {


  public grupoForm: FormGroup;

  constructor(protected service: GrupoService, private fb: FormBuilder, private navegacion: Router) { }

  ngOnInit(): void {

    this.grupoForm = this.fb.group({
      nombre: ['', Validators.required ]
    })
  }


  public crearGrupo() {
    console.log(this.grupoForm.value);
    this.service.crear(this.grupoForm.value).subscribe(
      () => {
        Swal.fire({
          title: 'Grupo  "' + this.grupoForm.value.nombre + '" Creado',
          icon: 'success',
          confirmButtonText: 'Listo',
        });
        this.navegacion.navigate(['dashboard', 'grupo','listar']);
      },
      ({ error }) => {
        Swal.fire({
          title: error.mensaje,
          text: this. grupoForm.value.nombre,
          icon: 'warning',
          confirmButtonText: 'Listo',
        });
      }
    );
  }

}
