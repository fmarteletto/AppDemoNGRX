import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsuariosState } from "../reducer/usuarios.reducer";

const usuariosFeatureState = createFeatureSelector<UsuariosState>('usuarios');

export const getUsuarios = createSelector(
    usuariosFeatureState,
    (state : UsuariosState) => state.usuarios
)

export const getUsuariosAdmin = createSelector(
    usuariosFeatureState,
    (state : UsuariosState) => state.usuarios.filter(filter =>filter.perfil?.toLowerCase() == 'administrador')
)

export const getUsuariosByClaim = createSelector(
    usuariosFeatureState,
    (state : UsuariosState, props :{ perfil :string}) => state.usuarios.filter(filter =>filter.perfil?.toLowerCase() == props.perfil.toLowerCase())
)

export const getSumUsuariosByClaim = createSelector(
    usuariosFeatureState,
    (state : UsuariosState, props :{ perfil :string}) => state.usuarios.filter(filter =>filter.perfil?.toLowerCase() == props.perfil.toLowerCase()).length
)

export const getSumUsuariosInvalidsByClaim = createSelector(
    usuariosFeatureState,
    (state : UsuariosState) => state.usuarios.filter(filter =>  filter.perfil?.toLowerCase() != "administrador" && filter.perfil?.toLowerCase() != "supervisor" && filter.perfil?.toLowerCase() != "usuario").length
)


export const getUsuario = createSelector(
    usuariosFeatureState,
    (state : UsuariosState) => state.usuario
)

export const getUsuarioError = createSelector(
    usuariosFeatureState,
    (state : UsuariosState) => state.error
)