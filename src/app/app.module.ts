import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';
import { CargaImagenesService } from './services/carga-imagenes.service';

// Firebase imports
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import {provideStorage, getStorage} from '@angular/fire/storage';
import { NgDropFileDirective } from './directivas/ng-drop-file.directive'

const firebaseConfig = {
  apiKey: "AIzaSyDnXgCR7DOGkc7ycjH7g1BURpZ30f5Qy38",
  authDomain: "loginups-65.firebaseapp.com",
  projectId: "loginups-65",
  storageBucket: "loginups-65.firebasestorage.app",
  messagingSenderId: "378267063558",
  appId: "1:378267063558:web:42191d60deee07f80e3a87"
};

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
    CargaComponent,
    NgDropFileDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    provideFirebaseApp(() => initializeApp(firebaseConfig)), // Usando configuración de Firebase
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage())
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    CargaImagenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
