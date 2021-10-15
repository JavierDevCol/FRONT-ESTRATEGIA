import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureRoutingModule } from './feature/feature.routing';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes), FeatureRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
