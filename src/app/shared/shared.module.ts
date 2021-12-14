import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './pipes/filtro.pipe';
import { SearchPipe } from './pipes/search.pipe';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpInterceptorService} from "./interceptors/http-interceptor.service";

@NgModule({
  declarations: [
    FiltroPipe,
    SearchPipe
  ],
  exports: [FiltroPipe, SearchPipe],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})
export class SharedModule {}
