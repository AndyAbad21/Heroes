import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.models';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  usuario: UsuarioModel = new UsuarioModel;
  recordarUser=false;
  constructor(private router:Router, private auth:AuthService){
    this.usuario=new UsuarioModel();
    this.usuario.email='';
    this.usuario.password='';
    this.auth.leerToken();
  }
  ngOnInit(){ 
    this.usuario=new UsuarioModel();
    this.usuario.email=""

    if(localStorage.getItem('email')){
      this.usuario.email=localStorage.getItem('email')?? '';
      this.recordarUser=true;
    }
  }
  login(fx: NgForm){
    if(fx.invalid){console.error('ERROR en formulario...');return}
    // console.log('Datos usuario:',this.usuario);
    // console.log('Formulario: ',fx);
    Swal.fire({
      allowOutsideClick:false,
      icon:'info',
      text:'Espere por favor...'
    });

    Swal.showLoading();

    this.auth.login(this.usuario).subscribe({
      next:resp=>{
        console.log('respuesta Login: ',resp);
        Swal.close();
        if(this.recordarUser){
          localStorage.setItem('email',this.usuario.email);
        }
        this.router.navigateByUrl('/home');
      },
      error:err=>{
        console.error('Error en Login: ',err.error.error.message)
        Swal.fire({
          icon:'error',
          title:'Error de credenciales',
          text:err.error.error.message
        });
      },
      complete:()=>{
        console.log('Login finalizado....');
        Swal.close();
      }
    });
  }
}
