import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Estrategia } from '../shared/model/Estrategia';
import { EstrategiaService } from '../shared/service/estrategia.service';

@Component({
  selector: 'app-listar-estrategia',
  templateUrl: './listar-estrategia.component.html',
  styleUrls: ['./listar-estrategia.component.css']
})
export class ListarEstrategiaComponent implements OnInit {
  public listaEstrategias: Observable<Estrategia[]>;
  public desde: number = 0;
  public numberPages: number = 0;
  public endPage: number = 1;
  public objMostrar: number = 4;

  constructor(protected estrategiaService: EstrategiaService) { }

  ngOnInit() {
    this.listaEstrategias = this.estrategiaService.consultar();
    this.listaEstrategias.subscribe( resp => this.calcularPage(resp.length) );

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

  borrar(estrategia: Estrategia) {
    Swal.fire({
      title: 'Desea eliminar la estrategia: ' + estrategia.nombre,
      showCancelButton: true
    }).then((input) => {
      if (input.isConfirmed) {
        this.estrategiaService.eliminar(estrategia).subscribe(
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
