import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      {
        path: 'materia',
        loadChildren: () =>
          import('./components/materia//materia.module').then(
            (mod) => mod.MateriaModule
          ),
      },
      {
        path: 'grupo',
        loadChildren: () =>
          import('./components/grupo/grupo.module').then(
            (mod) => mod.GrupoModule
          ),
      },
      {
        path: 'estudiante',
        loadChildren: () =>
        import('./components/estudiante/estudiante.module').then(
          (mod) => mod.EstudianteModule
        )
      },
      {
        path: 'clase',
        loadChildren: () =>
        import('./components/clase/clase.module').then(
          (mod) => mod.ClaseModule
        )
      },
      {
        path: 'docente',
        loadChildren: () =>
        import('./components/docente/docente.module').then(
          (mod) => mod.DocenteModule
        )
      },
      {
        path: 'estrategia',
        loadChildren: () =>
        import('./components/estrategia/estrategia.module').then(
          (mod) => mod.EstrategiaModule
        )
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
