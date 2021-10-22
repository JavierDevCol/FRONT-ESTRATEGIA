import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './pipes/filtro.pipe';

@NgModule({
  declarations: [
    FiltroPipe
  ],
  exports: [FiltroPipe],
  imports: [CommonModule],
})
export class SharedModule {}
