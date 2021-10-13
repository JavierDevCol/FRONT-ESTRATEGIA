import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { AuthModule } from './auth/auth.module';
import { FeatureComponent } from './feature.component';

@NgModule({
  declarations: [FeatureComponent],
  exports: [FeatureComponent],
  imports: [CommonModule, AppRoutingModule, AuthModule],
})
export class FeatureModule {}
