import { Action, createReducer, on } from "@ngrx/store";
import { UsuarioModel } from "src/app/models/UsuarioModel";
import * as action from "../actions/usuarios.actions"

export interface UsuariosState {
    usuarios: Array<UsuarioModel>,
    usuario: UsuarioModel | null,
    error: string | ''
}

export const initialState: UsuariosState = {
    usuarios: [],
    usuario: null,
    error: ''
}

const _usuariosReducer = createReducer(
    initialState,
    on(action.loadUsuariosSuccess, (state, { payload }) => ({ ...state, usuarios: payload, error: '' })),
    on(action.loadUsuariosError, (state, { error }) => ({ ...state, error: error })),

    on(action.loadUsuarioSuccess, (state, { payload }) => ({ ...state, usuario: payload, error: '' })),
    on(action.loadUsuarioError, (state, { error }) => ({ ...state, error: error })),

    on(action.createUsuarioSuccess, (state, { payload }) => ({ ...state, usuarios: [...state.usuarios, payload], error: '' })),
    on(action.createUsuarioError, (state, { error }) => ({ ...state, error: error })),

    on(action.updateUsuarioSuccess, (state, { payload }) => ({
        ...state,
        usuarios: [...state.usuarios].map(user => {
            if (user.id == payload.id) {
                return payload
            }
            else {
                return user
            }
        }),
        error: ''
    })),
    on(action.updateUsuarioError, (state, { error }) => ({ ...state, error: error })),

    on(action.deleteUsuarioSuccess, (state, { payload }) => ({
        ...state,
        usuarios: [...state.usuarios].filter((filter) =>  filter.id != payload ),
        error: ''
    })),
    on(action.deleteUsuarioError, (state, { error }) => ({ ...state, error: error })),
)

export function usuariosReduce(state = initialState, action: Action) {
    return _usuariosReducer(state, action)
}