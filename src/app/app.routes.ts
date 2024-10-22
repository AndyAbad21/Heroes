import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const APP_ROUTES:Routes=[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'heroes',component:HeroesComponent},
    {path:'heroe/:id1',component:HeroeComponent},
    {path:'buscador/:tx65',component:BuscadorComponent},
    {path:' ',pathMatch:'full',redirectTo:'/home'},

    { path: '**', redirectTo: '/home' }
];
@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);