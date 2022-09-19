import { Component, OnInit } from '@angular/core';
import { props, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/models/UsuarioModel';
import { AppState } from '../store/app-state';
import * as selector from '../store/selectors/usuarios.selectors'

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  userAdmin$ : Observable<number> = this.store.select(selector.getSumUsuariosByClaim,{perfil : 'Administrador'});
  userLisAdmin$ : Observable<UsuarioModel[]> = this.store.select(selector.getUsuariosByClaim,{perfil : 'Administrador'});
  userSuper$ : Observable<number> = this.store.select(selector.getSumUsuariosByClaim,{perfil : 'Supervisor'});
  user$ : Observable<number> = this.store.select(selector.getSumUsuariosByClaim,{perfil : 'Usuario'});
  userInvalid$ : Observable<number> = this.store.select(selector.getSumUsuariosInvalidsByClaim); 

  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {

  }

}
