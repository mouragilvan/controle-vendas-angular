import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { PagesRoutingModule } from './pages.routing.module';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
@NgModule({
  declarations: [
   InicioComponent,
   CustomersComponent
  ],
  imports: [
   PagesRoutingModule,
   CommonModule
   ],
  providers: []
})
export class PagesModule { }
