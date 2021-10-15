import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthRoutingModule } from './auth.routing';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    AuthRoutingModule
  ]
})
export class AuthModule { }
