import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { PagesRoutingModule } from './pages.routing.module';

@NgModule({
  declarations: [
   InicioComponent
  ],
  imports: [
   PagesRoutingModule
  ],
  providers: []
})
export class PagesModule { }
