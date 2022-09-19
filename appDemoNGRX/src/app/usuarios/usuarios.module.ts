import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralInfoComponent } from './general-info/general-info.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    CreateComponent,
    GeneralInfoComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UsuariosModule { }
