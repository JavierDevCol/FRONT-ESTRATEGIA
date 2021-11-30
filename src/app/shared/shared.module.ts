import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './pipes/filtro.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    FiltroPipe,
    SearchPipe
  ],
  exports: [FiltroPipe, SearchPipe],
  imports: [CommonModule],
})
export class SharedModule {}
