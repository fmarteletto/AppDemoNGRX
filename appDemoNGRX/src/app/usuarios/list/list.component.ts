import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/UsuarioModel';
import { UsuarioService } from 'src/app/repository/usuarioService';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor( private usuariosService : UsuarioService) { }
  public listUsuarios : Array<UsuarioModel> = [];

  ngOnInit(): void {
    this.usuariosService.getUSuarios().subscribe( (usuarios) => {
      console.log(usuarios)
      this.listUsuarios = usuarios;
    });
  }

}
