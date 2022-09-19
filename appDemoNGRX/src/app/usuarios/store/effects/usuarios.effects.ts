import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { UsuarioService } from "src/app/repository/usuarioService";
import * as action from "../actions/usuarios.actions"

@Injectable({
    providedIn: 'root'
})
export class UsuariosEffects {

    constructor(private actions$: Actions,
        private usuarioService: UsuarioService) {

    }

    loadUsuarios$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(action.usuariosTypeActions.LOAD_USUARIOS),
                exhaustMap(() => this.usuarioService.getUSuarios()
                    .pipe(
                        map(payload =>
                            action.loadUsuariosSuccess({ payload }),
                            catchError(error => of(action.loadUsuariosError({ error })))
                        )
                    )

                )
            )
    )

    loadUsuario$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(action.usuariosTypeActions.LOAD_USUARIO),
                exhaustMap((record: any) => this.usuarioService.getUSuario(record.payload)
                    .pipe(
                        map(payload =>
                            action.loadUsuarioSuccess({ payload }),
                            catchError(error => of(action.loadUsuariosError({ error })))
                        )
                    )

                )
            )
    )

    createUsuario$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(action.usuariosTypeActions.CREATE_USUARIO),
                exhaustMap((record: any) => this.usuarioService.addUSuario(record.payload)
                    .pipe(
                        map(payload =>
                            action.createUsuarioSuccess({ payload }),
                            catchError(error => of(action.createUsuarioError({ error })))
                        )
                    )

                )
            )
    )


    updateUsuario$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(action.usuariosTypeActions.UPDATE_USUARIO),
                exhaustMap((record: any) => this.usuarioService.updateUSuario(record.payload)
                    .pipe(
                        map(payload =>
                            action.updateUsuarioSuccess({ payload }),
                            catchError(error => of(action.updateUsuarioError({ error })))
                        )
                    )

                )
            )
    )

    deleteUsuario$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(action.usuariosTypeActions.DELETE_USUARIO),
                exhaustMap((record: any) => this.usuarioService.deleteUSuario(record.payload)
                    .pipe(
                        map(() =>
                            action.deleteUsuarioSuccess({ payload: record.payload}),
                            catchError(error => of(action.deleteUsuarioError({ error })))
                        )
                    )

                )
            )
    )



}
