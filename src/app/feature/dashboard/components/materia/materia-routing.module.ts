import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMateriaComponent } from './crear-materia/crear-materia.component';
import { ListarMateriaComponent } from './listar-materia/listar-materia.component';
import { MateriaComponent } from './materia/materia.component';

const routes: Routes = [
  {
    path: '',
    component: MateriaComponent,
    children: [
      { path: 'crear', component: CrearMateriaComponent },
      { path: 'listar', component: ListarMateriaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriaRoutingModule {}
