import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/UsuarioModel';
import { UsuarioService } from 'src/app/repository/usuarioService';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor( private usuariosService : UsuarioService, private router : Router) { }
  public listUsuarios : Array<UsuarioModel> = [];

  ngOnInit(): void {
    this.usuariosService.getUSuarios().subscribe( (usuarios) => {
      this.listUsuarios = usuarios;
    });
  }

 public edit ( usuario : UsuarioModel) : void {
    this.router.navigate(['/usuarios/add/'+usuario.id]);
  }

}
