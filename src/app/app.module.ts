import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';
import { CargaImagenesService } from './services/carga-imagenes.service';
import { environment } from '../enviroments/enviroment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HeroesComponent,
    HomeComponent,
    HeroeComponent,
    BuscadorComponent,
    LoginComponent,
    RegisterComponent,
    FotosComponent,
    CargaComponent
  ],

  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // Inicializar Firebase
    AngularFirestoreModule // Habilitar Firestore

  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    CargaImagenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
