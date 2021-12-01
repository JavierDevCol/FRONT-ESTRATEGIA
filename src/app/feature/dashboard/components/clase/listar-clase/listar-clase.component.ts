import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Docente } from '../../docente/shared/model/Docente';
import { DocenteService } from '../../docente/shared/service/docente.service';
import { AsignarEstrategias } from '../shared/model/AsignarEstrategia';
import { Clase } from '../shared/model/Clase';
import { ClaseHttpService } from '../shared/service/clase-http.service';

@Component({
  selector: 'app-listar-clase',
  templateUrl: './listar-clase.component.html',
  styleUrls: ['./listar-clase.component.css']
})
export class ListarClaseComponent implements OnInit {
  public listaClases: Observable<Clase[]>;
  public listaDocente: Observable<Docente[]>;
  public desde: number = 0;
  public numberPages: number = 0;
  public endPage: number = 1;
  public objMostrar: number = 4;

  private claseCopia: Clase;

  constructor(protected claseService: ClaseHttpService, protected docenteService: DocenteService) { }

  ngOnInit() {
    this.listaClases = this.claseService.consultar();
    this.listaClases.subscribe( resp => this.calcularPage(resp.length) );
    this.listaDocente = this.docenteService.consultar();
    this.listaDocente.subscribe();

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

  borrar(clase: Clase) {
    Swal.fire({
      title: 'Desea eliminar la clase: ' + clase.grupo,
      showCancelButton: true
    }).then((input) => {
      if (input.isConfirmed) {
        this.claseService.eliminar(clase).subscribe(
          () => {
            Swal.mixin({
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              background: '#D3FFA5',
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              }
            }).fire({
              icon: 'success',
              title: 'Se elimino el Perfil'
            });
            this.ngOnInit();
          },
          ({error}) => Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            background: '#FCFFA0',
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
          }).fire({
            icon: 'warning',
            title: error.mensaje
          })
        );
      }
    });

  }

  asignarDocente(clase: Clase) {
    Swal.fire({
      title: 'Ingrese el nombre del docente para la materia ' + clase.materia + ' ' + clase.grupo,
      input: 'text',
      inputLabel: 'Nombre del docente' + clase.docente,
      inputValue: "",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'El campo no puede estar vacio.';
        }
        clase.docente = value;
      },
    }).then((input) => {
      if (input.isConfirmed) {
        this.claseCopia = JSON.parse(JSON.stringify(clase));
        this.claseService.asignarDocenteMateriaClase(this.claseCopia).subscribe(
          () => {
            Swal.mixin({
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              background: '#D3FFA5',
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              },
            }).fire({
              icon: 'success',
              title: 'Actualizacion existosa',
            });
            this.ngOnInit();
          },
          ({ error }) =>
            Swal.mixin({
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              background: '#FCFFA0',
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              },
            }).fire({
              icon: 'warning',
              title: error.mensaje,
            })
        );
      }
    });
  }

  asignarEstudiante(clase: Clase) {
    Swal.fire({
      title: 'Ingrese el nombre del estudiante para la materia ' + clase.materia + ' ' + clase.grupo,
      input: 'text',
      inputLabel: 'Nombre del estudiante' + clase.estudiante,
      inputValue: "",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'El campo no puede estar vacio.';
        }
        clase.estudiante = value;
      },
    }).then((input) => {
      if (input.isConfirmed) {
        this.claseCopia = JSON.parse(JSON.stringify(clase));
        this.claseService.asignarDocenteMateriaClase(this.claseCopia).subscribe(
          () => {
            Swal.mixin({
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              background: '#D3FFA5',
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              },
            }).fire({
              icon: 'success',
              title: 'Actualizacion existosa',
            });
            this.ngOnInit();
          },
          ({ error }) =>
            Swal.mixin({
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              background: '#FCFFA0',
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              },
            }).fire({
              icon: 'warning',
              title: error.mensaje,
            })
        );
      }
    });
  }

  asignarEstrategia(clase: Clase) {
    Swal.fire({
      title: 'Ingrese el nombre de la estratetgia para la materia ' + clase.materia + ' - ' + clase.grupo,
      input: 'text',
      inputLabel: 'Nombre de la estrategia: ' ,
      inputValue: "",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'El campo no puede estar vacio.';
        }
        let asignar: AsignarEstrategias;
        asignar.clase = clase.id;
        asignar.estrategia = Number.parseInt(value);
        asignar.id = 0;
      },
    }).then((input) => {
      if (input.isConfirmed) {
        this.claseCopia = JSON.parse(JSON.stringify(clase));
        this.claseService.asignarDocenteMateriaClase(this.claseCopia).subscribe(
          () => {
            Swal.mixin({
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              background: '#D3FFA5',
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              },
            }).fire({
              icon: 'success',
              title: 'Actualizacion existosa',
            });
            this.ngOnInit();
          },
          ({ error }) =>
            Swal.mixin({
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              background: '#FCFFA0',
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              },
            }).fire({
              icon: 'warning',
              title: error.mensaje,
            })
        );
      }
    });
  }

}
