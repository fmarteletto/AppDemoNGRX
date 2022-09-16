import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
