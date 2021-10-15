import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoComponent } from './grupo/grupo.component';
import { ListarGrupoComponent } from './listar-grupo/listar-grupo.component';
import { CrearGrupoComponent } from './crear-grupo/crear-grupo.component';


@NgModule({
  declarations: [
    GrupoComponent,
    ListarGrupoComponent,
    CrearGrupoComponent
  ],
  imports: [
    CommonModule,
    GrupoRoutingModule
  ]
})
export class GrupoModule { }
