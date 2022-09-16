import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/UsuarioModel';
import { UsuarioService } from 'src/app/repository/usuarioService';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public formUsuario! : FormGroup;
  public userID: string | null = null;

  constructor( private fb : FormBuilder, 
    private usuarioService : UsuarioService,
    private router : Router,
    private activeRoute : ActivatedRoute
    ) {
    this.createForm();
   }

  ngOnInit(): void {
    this.userID = this.activeRoute.snapshot.paramMap.get('id') ?? null;
  }
  
  private createForm(){
    this.formUsuario = this.fb.group({
      id : [null],
      name : ['',Validators.required],
      perfil : ['',Validators.required],
      age :  ['',Validators.required],
    })
  }

  public send(){
    let user : UsuarioModel = {};
    Object.assign(user,this.formUsuario.value)
    user.id = Number(this.userID);
    if(user.id == 0){
      this.usuarioService.addUSuario(user).subscribe((result)=>{
        console.log(result);
        this.router.navigate(['/usuarios']);
      })
    }else{
      this.usuarioService.updateUSuario(user).subscribe((result)=>{
        console.log(result);
        this.router.navigate(['/usuarios']);
      })
    }
    
  }
}
