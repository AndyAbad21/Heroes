import { Component } from '@angular/core';
import { HeroesService } from './services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SPAp65';
  constructor(private _heroesService:HeroesService,
    private router:Router
  ){}
  buscarheroe(texto:string){
    // let result:Heroe[]=[];
    // result=this._heroesService.buscarHeroes(texto);
    // console.log('heroes encontrador',result);
    this.router.navigate(['/buscador',texto]);
  }
}
