import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Docente } from '../shared/model/Docente';
import { DocenteService } from '../shared/service/docente.service';

@Component({
  selector: 'app-listar-docente',
  templateUrl: './listar-docente.component.html',
  styleUrls: ['./listar-docente.component.css'],
})
export class ListarDocenteComponent implements OnInit {
  public listaDocentes: Observable<Docente[]>;
  public desde: number = 0;
  public numberPages: number = 0;
  public endPage: number = 1;
  public objMostrar: number = 4;

  constructor(protected docenteService: DocenteService) {}

  ngOnInit() {
    this.listaDocentes = this.docenteService.consultar();
    this.listaDocentes.subscribe((resp) => this.calcularPage(resp.length));
  }

  public nextPage() {
    if (this.endPage < this.numberPages) {
      this.desde += this.objMostrar;
      this.endPage++;
    }
  }

  public previousPage() {
    if (this.desde > 0) {
      this.desde -= this.objMostrar;
      this.endPage--;
    }
  }

  private calcularPage(totalObj: number) {
    if (totalObj === this.objMostrar) this.numberPages = 0;
    else this.numberPages = Math.round(totalObj / this.objMostrar);
  }

  borrar(docente: Docente) {
    Swal.fire({
      title: 'Desea eliminar el Docente: ' + docente.nombre,
      showCancelButton: true,
    }).then((input) => {
      if (input.isConfirmed) {
        this.docenteService.eliminar(docente).subscribe(
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
              title: 'Se elimino el Perfil',
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
