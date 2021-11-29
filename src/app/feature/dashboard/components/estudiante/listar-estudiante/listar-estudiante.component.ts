import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Estudiante } from '../shared/model/Estudiante';
import { EstudianteService } from '../shared/service/estudiante.service';

@Component({
  selector: 'app-listar-estudiante',
  templateUrl: './listar-estudiante.component.html',
  styleUrls: ['./listar-estudiante.component.css']
})
export class ListarEstudianteComponent implements OnInit {

  public listaEstudiantes: Observable<Estudiante[]>;
  public desde: number = 0;
  public numberPages: number = 0;
  public endPage: number = 1;
  public objMostrar: number = 4;

  constructor(protected estudianteService: EstudianteService) { }

  ngOnInit() {
    this.listaEstudiantes = this.estudianteService.consultar();
    this.listaEstudiantes.subscribe( resp => this.calcularPage(resp.length) );

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

  borrar(estudiante: Estudiante) {
    Swal.fire({
      title: 'Desea eliminar el estudiante: ' + estudiante.nombre + " " + estudiante.apellido,
      showCancelButton: true
    }).then((input) => {
      if (input.isConfirmed) {
        this.estudianteService.eliminar(estudiante).subscribe(
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

}
