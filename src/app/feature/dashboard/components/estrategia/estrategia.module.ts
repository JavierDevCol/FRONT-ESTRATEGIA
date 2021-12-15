import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearEstrategiaComponent } from './crear-estrategia/crear-estrategia.component';
import { ListarEstrategiaComponent } from './listar-estrategia/listar-estrategia.component';
import { EstrategiaRoutingModule } from './estrategia-routing.module';
import { EstrategiaComponent } from './estrategia/estrategia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EstrategiaService } from './shared/service/estrategia.service';



@NgModule({
  declarations: [
    CrearEstrategiaComponent,
    ListarEstrategiaComponent,
    EstrategiaComponent
  ],
  exports: [
    CrearEstrategiaComponent,
    ListarEstrategiaComponent,
    EstrategiaComponent
  ],
  imports: [
    CommonModule,
    EstrategiaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    EstrategiaService
  ]
})
export class EstrategiaModule { }
