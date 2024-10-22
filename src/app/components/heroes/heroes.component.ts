import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent {
  heroes:Heroe[]=[];
  constructor(private _heroesService:HeroesService,
    private router:Router
  ){}
  ngOnInit(): void{
    this.heroes=this._heroesService.getHeroes();
    console.log('Heroes:',this.heroes);
  }
  verHeroe(Ix:number){
    console.log('ver informacion de heroe No:'+Ix);
    this.router.navigate(['/heroe',Ix])
  }
  // buscarheroes(t65:string):Heroe[]{
  //   let heroesArr:Heroe[]=[];
  //   t65=t65.toLowerCase();
  //   for(let h65 of this.heroes){
  //     let nombre=h65.nombre.toLowerCase();
  //     if(nombre.indexOf(t65)>=0){
  //       heroesArr.push(h65);
  //     }
  //   }
  //   return heroesArr;
  // }
}
