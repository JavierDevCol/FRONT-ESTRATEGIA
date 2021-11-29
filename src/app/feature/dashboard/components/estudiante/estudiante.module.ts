import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearEstudianteComponent } from './crear-estudiante/crear-estudiante.component';
import { ListarEstudianteComponent } from './listar-estudiante/listar-estudiante.component';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstudianteService } from './shared/service/estudiante.service';



@NgModule({
  declarations: [
    CrearEstudianteComponent,
    ListarEstudianteComponent,
    EstudianteComponent
  ],
  exports: [
    CrearEstudianteComponent,
    ListarEstudianteComponent,
    EstudianteComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EstudianteService],
})
export class EstudianteModule { }
