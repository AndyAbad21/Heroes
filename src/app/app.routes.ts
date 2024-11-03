import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { authGuard } from './guards/auth.guard';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';


const APP_ROUTES:Routes=[
    {path:'home',component:HomeComponent, canActivate:[authGuard]},
    {path:'fotos',component:FotosComponent, canActivate:[authGuard]},
    {path:'carga',component:CargaComponent, canActivate:[authGuard]},
    {path:'about',component:AboutComponent},
    {path:'heroes',component:HeroesComponent},
    {path:'heroe/:id1',component:HeroeComponent},
    {path:'buscador/:tx65',component:BuscadorComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:' ',pathMatch:'full',redirectTo:'/home'},

    { path: '**', redirectTo: 'login' }
];
@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);