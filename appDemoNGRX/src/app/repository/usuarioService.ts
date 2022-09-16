import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/UsuarioModel';

const BASEPATH = 'http://localhost:3000/usuarios'
@Injectable({providedIn:'root'})

export class UsuarioService {

    constructor(private httpClient: HttpClient) {

    }

    public getUSuarios() {
        return this.httpClient.get<Array<UsuarioModel>>(BASEPATH);
    }
    
    public getUSuario(id: number) {
        return this.httpClient.get<UsuarioModel>(BASEPATH + '/' + id);

    }

    public addUSuario(usuario: UsuarioModel) {
        let header = new HttpHeaders();
        header = header.set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.post<UsuarioModel>(BASEPATH, JSON.stringify(usuario), { headers: header });
    }

    public updateUSuario(usuario: UsuarioModel) {
        let header = new HttpHeaders();
        header = header.set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.put<UsuarioModel>(BASEPATH + '/' + usuario.id, JSON.stringify(usuario), { headers: header });
    }
    
    public deleteUSuario(usuario: UsuarioModel) {
        let header = new HttpHeaders();
        header = header.set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.delete(BASEPATH + '/' + usuario.id, { headers: header });

    }
}