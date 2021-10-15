import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriaRoutingModule } from './materia-routing.module';
import { ListarMateriaComponent } from './listar-materia/listar-materia.component';
import { CrearMateriaComponent } from './crear-materia/crear-materia.component';
import { MateriaComponent } from './materia/materia.component';
import { DashboardComponent } from '../dashboard.component';
import { CoreModule } from 'src/app/core/core.module';

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
})
export class MateriaModule {}
