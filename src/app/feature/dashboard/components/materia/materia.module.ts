import { NgModule } from '@angular/core';

import { MateriaRoutingModule } from './materia-routing.module';
import { ListarMateriaComponent } from './listar-materia/listar-materia.component';
import { CrearMateriaComponent } from './crear-materia/crear-materia.component';
import { MateriaComponent } from './materia/materia.component';
import { MateriaService } from './shared/service/materia.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ListarMateriaComponent,
    CrearMateriaComponent,
    MateriaComponent
  ],
  exports: [
    ListarMateriaComponent,
    CrearMateriaComponent,
    MateriaComponent
  ],
  imports: [CommonModule, MateriaRoutingModule],
  providers: [MateriaService]
})
export class MateriaModule {}
