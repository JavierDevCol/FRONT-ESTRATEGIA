import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Clase } from '../shared/model/Clase';
import { ClaseService } from '../shared/service/Clase.service';

@Component({
  selector: 'app-listar-clase',
  templateUrl: './listar-clase.component.html',
  styleUrls: ['./listar-clase.component.css']
})
export class ListarClaseComponent implements OnInit {
  public listaClases: Observable<Clase[]>;
  public desde: number = 0;
  public numberPages: number = 0;
  public endPage: number = 1;
  public objMostrar: number = 4;

  constructor(protected claseService: ClaseService) { }

  ngOnInit() {
    this.listaClases = this.claseService.consultar();
    this.listaClases.subscribe( resp => this.calcularPage(resp.length) );

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

}
