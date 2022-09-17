import { Action, createReducer, on } from "@ngrx/store";
import { UsuarioModel } from "src/app/models/UsuarioModel";
import { usuariosTypeActions } from "../actions/usuarios.actions";
import * as action from "../actions/usuarios.actions"

export interface UsuariosState {
    usuarios : Array<UsuarioModel>,
    usuario : UsuarioModel | null,
    error : string | ''
}

export const initialState : UsuariosState = {
    usuarios : [],
    usuario : null,
    error : ''
}

const _usuariosReducer = createReducer(
    initialState, 
    on(action.loadUsuariosSuccess,(state, {payload })=>({...state, usuarios : payload , error : ''})),
    on(action.loadUsuariosError,(state, {error })=>({...state, error : error})),

    on(action.loadUsuarioSuccess,(state, {payload })=>({...state, usuario : payload , error : ''})),
    on(action.loadUsuarioError,(state, {error })=>({...state, error : error})),

    on(action.createUsuarioSuccess,(state, {payload })=>({...state, usuarios : [...state.usuarios,payload] , error : ''})),
    on(action.createUsuarioError,(state, {error })=>({...state, error : error}))
)

export function usuariosReduce( state = initialState , action : Action){
    return _usuariosReducer( state , action)
}