import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsuariosModule } from './usuarios/usuarios.module';

const routes: Routes = [
  {path : 'usuarios' , loadChildren : () => import('./usuarios/usuarios.module').then(m=> m.UsuariosModule) } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
