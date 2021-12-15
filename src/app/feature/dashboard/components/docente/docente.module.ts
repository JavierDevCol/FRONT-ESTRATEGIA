import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearDocenteComponent } from './crear-docente/crear-docente.component';
import { ListarDocenteComponent } from './listar-docente/listar-docente.component';
import { DocenteRoutingModule } from './docente-routing.module';
import { DocenteComponent } from './docente/docente.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocenteService } from './shared/service/docente.service';



@NgModule({
  declarations: [
    CrearDocenteComponent,
    ListarDocenteComponent,
    DocenteComponent
  ],
  exports: [
    CrearDocenteComponent,
    ListarDocenteComponent,
    DocenteComponent
  ],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DocenteService
  ]
})
export class DocenteModule { }
