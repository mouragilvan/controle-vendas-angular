import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { PagesRoutingModule } from './pages.routing.module';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
   InicioComponent,
   CustomersComponent,
   CustomerComponent
  ],
  imports: [
   PagesRoutingModule,
   CommonModule,
   ReactiveFormsModule
   ],
  providers: []
})
export class PagesModule { }
