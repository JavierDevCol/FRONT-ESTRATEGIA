import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoComponent } from './grupo/grupo.component';
import { ListarGrupoComponent } from './listar-grupo/listar-grupo.component';
import { CrearGrupoComponent } from './crear-grupo/crear-grupo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { GrupoService } from './shared/service/grupo.service';


@NgModule({
  declarations: [
    GrupoComponent,
    ListarGrupoComponent,
    CrearGrupoComponent
  ],
  exports: [
    GrupoComponent,
    ListarGrupoComponent,
    CrearGrupoComponent
  ],
  imports: [
    CommonModule,
    GrupoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    GrupoService
  ]
})
export class GrupoModule { }
