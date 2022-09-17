import { createAction, props } from "@ngrx/store";
import { UsuarioModel } from "src/app/models/UsuarioModel";

export const enum usuariosTypeActions{
    LOAD_USUARIOS = '[LOAD_USUARIOS] Lista de Usuarios',
    LOAD_USUARIOS_SUCCESS = '[LOAD_USUARIOS_SUCCESS] Lista de Usuarios Sucesso',
    LOAD_USUARIOS_ERROR = '[LOAD_USUARIOS_ERROR] Lista de Usuarios Erro',

    LOAD_USUARIO = '[LOAD_USUARIO] Usuario',
    LOAD_USUARIO_SUCCESS = '[LOAD_USUARIO_SUCCESS] Usuario Sucesso',
    LOAD_USUARIO_ERROR = '[LOAD_USUARIO_ERROR] Usuario Erro',

    CREATE_USUARIO = '[CREATE_USUARIO] Usuario',
    CREATE_USUARIO_SUCCESS = '[CREATE_USUARIO_SUCCESS] Usuario Criado Sucesso',
    CREATE_USUARIO_ERROR = '[CREATE_USUARIO_ERROR] Usuario Criado Erro',

    UPDATE_USUARIO = '[UPDATE_USUARIO] Usuario',
    UPDATE_USUARIO_SUCCESS = '[UPDATE_USUARIO_SUCCESS] Usuario Atualizado Sucesso',
    UPDATE_USUARIO_ERROR = '[UPDATE_USUARIO_ERROR] Usuario Atualizado Erro',

    DELETE_USUARIO = '[DELETE_USUARIO] Usuario',
    DELETE_USUARIO_SUCCESS = '[DELETE_USUARIO_SUCCESS] Usuario Removido Sucesso',
    DELETE_USUARIO_ERROR = '[DELETE_USUARIO_ERROR] Usuario Removido Erro'

}


// Load Usuarios

export const loadUsuarios = createAction(
    usuariosTypeActions.LOAD_USUARIOS
)

export const loadUsuariosSuccess = createAction(
    usuariosTypeActions.LOAD_USUARIOS_SUCCESS,
    props<{payload : Array<UsuarioModel>}>()
)

export const loadUsuariosError = createAction(
    usuariosTypeActions.LOAD_USUARIOS_ERROR,
    props<{error : string}>()
)

// Load Usuario

export const loadUsuario = createAction(
    usuariosTypeActions.LOAD_USUARIO,
    props<{payload : number}>()
)

export const loadUsuarioSuccess = createAction(
    usuariosTypeActions.LOAD_USUARIO_SUCCESS,
    props<{payload : UsuarioModel}>()
)

export const loadUsuarioError = createAction(
    usuariosTypeActions.LOAD_USUARIO_ERROR,
    props<{error : string}>()
)


// Create Usuario

export const createUsuario = createAction(
    usuariosTypeActions.CREATE_USUARIO,
    props<{payload : UsuarioModel}>()
)

export const createUsuarioSuccess = createAction(
    usuariosTypeActions.CREATE_USUARIO_SUCCESS,
    props<{payload : UsuarioModel}>()
)

export const createUsuarioError = createAction(
    usuariosTypeActions.CREATE_USUARIO_ERROR,
    props<{error : string}>()
)


// Update Usuario

export const updateUsuario = createAction(
    usuariosTypeActions.UPDATE_USUARIO,
    props<{payload : UsuarioModel}>()
)

export const updateUsuarioSuccess = createAction(
    usuariosTypeActions.UPDATE_USUARIO_SUCCESS,
    props<{payload : UsuarioModel}>()
)

export const updateUsuarioError = createAction(
    usuariosTypeActions.UPDATE_USUARIO_ERROR,
    props<{error : string}>()
)

// Delete Usuario

export const deleteUsuario = createAction(
    usuariosTypeActions.DELETE_USUARIO,
    props<{payload : number}>()
)

export const deleteUsuarioSuccess = createAction(
    usuariosTypeActions.DELETE_USUARIO_SUCCESS,
    props<{payload : number}>()
)

export const deleteUsuarioError = createAction(
    usuariosTypeActions.DELETE_USUARIO_ERROR,
    props<{error : string}>()
)
