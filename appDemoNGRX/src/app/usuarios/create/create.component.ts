import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/UsuarioModel';
import { AppState } from '../store/app-state';
import * as action from '../store/actions/usuarios.actions'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public formUsuario!: FormGroup;
  public userID: string | null = null;

  constructor(private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.userID = this.activeRoute.snapshot.paramMap.get('id') ?? null;
  }

  private createForm() {
    this.formUsuario = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      perfil: ['', Validators.required],
      age: ['', Validators.required],
    })
  }

  public send() {
    let user: UsuarioModel = {};
    Object.assign(user, this.formUsuario.value)
    user.id = Number(this.userID);
    if (user.id == 0) {
      this.store.dispatch(action.createUsuario({ payload: user }))
      this.formUsuario.reset();

    } else {
      this.store.dispatch(action.updateUsuario({ payload: user }))
      this.formUsuario.reset();
    }
  }
}
