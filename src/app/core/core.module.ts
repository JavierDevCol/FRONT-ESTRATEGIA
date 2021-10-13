import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidersComponent } from './components/siders/siders.component';



@NgModule({
  declarations: [SidersComponent, HeaderComponent],
  exports: [SidersComponent, HeaderComponent],
  imports: [CommonModule],
})
export class CoreModule { }
