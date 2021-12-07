import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthRoutingModule } from './auth.routing';
import { AuthService } from './service/auth.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ], exports: [
    LoginComponent,
    RegistroComponent,
    HttpClientModule
  ],
  imports: [
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    CoreModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
