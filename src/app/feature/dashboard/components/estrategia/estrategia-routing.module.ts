import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEstrategiaComponent } from './crear-estrategia/crear-estrategia.component';
import { ListarEstrategiaComponent } from './listar-estrategia/listar-estrategia.component';

const routes: Routes = [
  {
    path: 'crear',
    component: CrearEstrategiaComponent
  },
  {
    path: 'listar',
    component: ListarEstrategiaComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class EstrategiaRoutingModule { }
