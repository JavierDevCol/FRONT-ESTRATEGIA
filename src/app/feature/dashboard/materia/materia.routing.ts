import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { MateriaComponent } from './components/materia/materia.component';
import { MateriaCrearComponent } from './components/materiaCrear/crear.component';
import { MateriaListarComponent } from './components/Materialistar/listar.component';

const routes: Routes = [
  {
    path: 'materia',
    component: MateriaComponent,
    children: [
      { path: 'crear-materia', component: MateriaCrearComponent},
      { path: 'listar-materia', component: MateriaListarComponent}
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class MateriaRoutingModule {}
