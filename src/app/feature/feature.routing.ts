import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';

const routes: Routes = [
  { path: '', component: FeatureComponent},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule )},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)}
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class FeatureRoutingModule { }
