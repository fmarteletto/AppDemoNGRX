import { ActionReducerMap } from "@ngrx/store";
import { UsuariosEffects } from "./effects/usuarios.effects";
import { usuariosReduce, UsuariosState } from "./reducer/usuarios.reducer";

export interface AppState {
    usuarios : UsuariosState
}

export const appReducer : ActionReducerMap<AppState> = {
    usuarios : usuariosReduce
}

export const usuariosEffect =[
    UsuariosEffects
]