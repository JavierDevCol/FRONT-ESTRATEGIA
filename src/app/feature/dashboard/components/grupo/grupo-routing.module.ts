import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearGrupoComponent } from './crear-grupo/crear-grupo.component';
import { GrupoComponent } from './grupo/grupo.component';
import { ListarGrupoComponent } from './listar-grupo/listar-grupo.component';

const routes: Routes = [
  {
    path: '',
    component: GrupoComponent,
    children: [
      {
        path: 'crear',
        component: CrearGrupoComponent,
      },
      {
        path: 'listar',
        component: ListarGrupoComponent,
      },
      {
        path: '**',
        component: GrupoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrupoRoutingModule {}
