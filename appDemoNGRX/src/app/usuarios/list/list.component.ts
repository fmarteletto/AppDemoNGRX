import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/UsuarioModel';
import { AppState } from '../store/app-state';
import * as action from '../store/actions/usuarios.actions'
import * as selector from '../store/selectors/usuarios.selectors'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  listUsuarios$: Observable<UsuarioModel[]> = this.store.select(selector.getUsuarios);

  ngOnInit(): void {
    this.store.dispatch(action.loadUsuarios())
  }

  public edit(usuario: UsuarioModel): void {
    let idUser : number = Number(usuario.id);
    this.store.dispatch(action.loadUsuario({ payload: idUser}))
    this.router.navigate(['/usuarios/add/' + usuario.id]);
  }

  public removeUser(usuario: UsuarioModel) {
    let idUser : number = Number(usuario.id);
    this.store.dispatch(action.deleteUsuario({ payload: idUser}))
  }

}
