import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClaseComponent } from './crear-clase/crear-clase.component';
import { ListarClaseComponent } from './listar-clase/listar-clase.component';

const routes: Routes = [
  {
    path: 'crear',
    component: CrearClaseComponent
  },
  {
    path: 'listar',
    component: ListarClaseComponent
  }
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ClaseRoutingModule { }
