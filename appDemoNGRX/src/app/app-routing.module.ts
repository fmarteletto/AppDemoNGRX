import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: '', component : IndexComponent },
  {path : 'usuarios' , loadChildren : () => import('./usuarios/usuarios.module').then(m=> m.UsuariosModule) } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
