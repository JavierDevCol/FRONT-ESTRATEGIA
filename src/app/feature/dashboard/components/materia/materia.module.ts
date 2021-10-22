import { NgModule } from '@angular/core';

import { MateriaRoutingModule } from './materia-routing.module';
import { ListarMateriaComponent } from './listar-materia/listar-materia.component';
import { CrearMateriaComponent } from './crear-materia/crear-materia.component';
import { MateriaComponent } from './materia/materia.component';
import { MateriaService } from './shared/service/materia.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListarMateriaComponent,
    CrearMateriaComponent,
    MateriaComponent,
  ],
  exports: [ListarMateriaComponent, CrearMateriaComponent, MateriaComponent],
  imports: [
    CommonModule,
    MateriaRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [MateriaService],
})
export class MateriaModule {}
