import { Injectable } from '@angular/core';

export interface Heroe{
  idx: Number,
  nombre: string,
  bio: string,
  img: string,
  aparicion: string,
  casa: string
}

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private heroes: Heroe[] = [
    {
      idx: 1,
      nombre: "Aquaman",
      bio: "El más reconocido de Aquaman es la capacidad telepática de hablar con los peces",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa: "DC"
    },
    {
      idx: 2,
      nombre: "Batman",
      bio: "Batman es el protector de Gotham, un superhéroe sin superpoderes que usa su intelecto y habilidades de combate",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa: "DC"
    },
    {
      idx: 3,
      nombre: "Daredevil",
      bio: "A pesar de ser ciego, Daredevil utiliza sus sentidos agudizados para combatir el crimen en Hell's Kitchen",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      idx: 4,
      nombre: "Hulk",
      bio: "Hulk es la poderosa criatura verde que aparece cuando Bruce Banner se enfurece. Tiene una fuerza prácticamente ilimitada",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa: "Marvel"
    },
    {
      idx: 5,
      nombre: "Linterna Verde",
      bio: "Linterna Verde posee un anillo que le otorga habilidades sobrehumanas, alimentado por su fuerza de voluntad",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-07-01",
      casa: "DC"
    },
    {
      idx: 6,
      nombre: "Spiderman",
      bio: "Después de ser mordido por una araña radioactiva, Peter Parker ganó poderes arácnidos y se convirtió en Spiderman",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      idx: 7,
      nombre: "Wolverine",
      bio: "Wolverine es un mutante con habilidades de curación, garras retráctiles y un esqueleto recubierto de adamantium",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }
  ];
  
  constructor() {
    console.log('Servicio Heroes-p65 listo para funcionar');
  }

  getHeroes():Heroe[]{
    return this.heroes;
  }
  
  getHeroe(pos1:string):Heroe{
    return this.heroes[Number(pos1)]
  }
  buscarheroes(t65:string):Heroe[]{
    let heroesArr:Heroe[]=[];
    t65=t65.toLowerCase();
    for(let h65 of this.heroes){
      let nombre=h65.nombre.toLowerCase();
      if(nombre.indexOf(t65)>=0){
        heroesArr.push(h65);
      }
    }
    return heroesArr;
  }
}
