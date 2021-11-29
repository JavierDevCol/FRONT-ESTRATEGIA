import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearDocenteComponent } from './crear-docente/crear-docente.component';
import { ListarDocenteComponent } from './listar-docente/listar-docente.component';

const routes: Routes = [
  {path: 'crear', component: CrearDocenteComponent},
  {path: 'listar', component: ListarDocenteComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class DocenteRoutingModule { }
