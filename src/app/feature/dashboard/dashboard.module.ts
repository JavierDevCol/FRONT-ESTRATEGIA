import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard.component';
import { CoreModule } from 'src/app/core/core.module';
import { MateriaModule } from './components/materia/materia.module';
import { HttpClientModule } from '@angular/common/http';
import { GrupoModule } from './components/grupo/grupo.module';
import { EstudianteModule } from './components/estudiante/estudiante.module';
import { EstrategiaModule } from './components/estrategia/estrategia.module';
import { DocenteModule } from './components/docente/docente.module';
import { ClaseModule } from './components/clase/clase.module';

@NgModule({
  declarations: [
    InicioComponent,
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    MateriaModule,
    GrupoModule,
    EstudianteModule,
    EstrategiaModule,
    DocenteModule,
    ClaseModule,
    CoreModule,

  ],
  exports: [HttpClientModule]
})
export class DashboardModule { }
