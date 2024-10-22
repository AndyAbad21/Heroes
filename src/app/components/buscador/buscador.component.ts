import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent {
  heroes:Heroe[]=[];
  termino:string="";
  constructor(private activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService
  ){}
  ngOnInit():void{
    this.activatedRoute.params.subscribe(params=>{
      this.termino=params['tx65'];
      this.heroes=this._heroesService.buscarheroes(this.termino);
      console.log('Heroes encontrados-1', this.heroes);
    })
  }
}
