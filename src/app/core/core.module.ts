import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidersComponent } from './components/siders/siders.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidersComponent, HeaderComponent, BreadcrumbsComponent],
  exports: [SidersComponent, HeaderComponent, BreadcrumbsComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule { }
