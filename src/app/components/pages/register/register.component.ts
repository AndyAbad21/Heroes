import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.models';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  usuario: UsuarioModel = new UsuarioModel;
  recordarUser=false;
  
  constructor(private router:Router, private authService:AuthService){}
  ngOnInit(){ 
    this.usuario=new UsuarioModel();
    this.usuario.email=""
  }

  onSubmit(formu: NgForm){
    // console.log('Formulario Enviado: ',formu);
    // console.log('Datos usuario: ',this.usuario);
    if(formu.invalid){console.error('Error el enviar formulario');return;}
    Swal.fire({
      allowOutsideClick:false,
      icon:'info',
      text:'Espere por favor...'
    });

    Swal.showLoading();
    this.authService.nuevoUsuario(this.usuario).subscribe({
      next:resp=>{
        console.log('nuevo Usuario Resp:',resp);
        Swal.close();
        if(this.recordarUser){
          localStorage.setItem('email',this.usuario.email);
        }
        this.router.navigateByUrl('/home');
      },
      error:err=>{
        console.log('Error en la creacion de usuario:'),err
        Swal.fire({
          icon:'error',
          title:'Error en creacion del usuario',
          text:err.error.error.message
        });
      },
      complete:()=>{
        console.log('Ha finalizado la creacion del usuario....');
        Swal.close();
      }
    })
  }
}
