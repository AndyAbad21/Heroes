import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Para registrar usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]
  //Para login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private api_key = 'AIzaSyDaNdl0fHPoUrVrzeS8pBHOn7eXwfrc41A';
  userToken: string = '';

  constructor(private http: HttpClient) { 
    this.leerToken();
  }

  estaAutenticado():boolean{
    if(this.userToken.length>7){return false};
    const expira=Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setDate(expira);
    if(expiraDate > new Date()){
      return true;
    }else{
      return false;
    }
  }

  guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    let ahora=new Date();
    ahora.setTime(ahora.getTime()+4*3600*1000);
    localStorage.setItem('expira',ahora.getTime().toString());
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token') ?? '';
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }
    return this.http.post(`${this.url}signUp?key=${this.api_key}`, authData).pipe(
      map(resp=>{
        console.log('creacion de nuevo usuario');
        this.guardarToken((resp as any)['idToken']);
        return resp;
      })
    );
  }

  login(usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password
    }
    return this.http.post(`${this.url}signInWithPassword?key=${this.api_key}`, authData).pipe(
      map(resp=>{
        console.log('login de usuario');
        this.guardarToken((resp as any)['idToken']);
        return resp;
      })
    );
  }

  logout(){
    localStorage.removeItem('token');
  }
}
