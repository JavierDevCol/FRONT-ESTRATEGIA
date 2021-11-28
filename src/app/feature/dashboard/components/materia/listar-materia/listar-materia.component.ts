import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from '../shared/model/Materia';
import { MateriaService } from '../shared/service/materia.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar-materia',
  templateUrl: './listar-materia.component.html',
  styleUrls: []
})
export class ListarMateriaComponent implements OnInit {

  public listaMaterias: Observable<Materia[]>;
  public desde: number = 0;
  public numberPages: number = 0;
  public endPage: number = 1;
  public objMostrar: number = 4;

  constructor(protected materiaServie: MateriaService) { }

  ngOnInit() {
    this.listaMaterias = this.materiaServie.consultar();
    this.listaMaterias.subscribe( resp => this.calcularPage(resp.length) );

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

  borrar(producto: Materia) {
    Swal.fire({
      title: 'Desea eliminar el perfil: ' + producto.nombre,
      showCancelButton: true
    }).then((input) => {
      if (input.isConfirmed) {
        this.materiaServie.eliminar(producto).subscribe(
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
