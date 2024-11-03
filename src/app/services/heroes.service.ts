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
      nombre: "Ceviche",
      bio: "Plato típico de la costa hecho con pescado marinado en jugo de limón y acompañado de maíz y chifles.",
      img: "assets/img/ceviche.png",
      aparicion: "Precolombina",
      casa: "Costa"
    },
    {
      idx: 2,
      nombre: "Llapingachos",
      bio: "Tortillas de papa rellenas de queso, servidas con chorizo y salsa de maní.",
      img: "assets/img/llapingachos.png",
      aparicion: "Colonial",
      casa: "Sierra"
    },
    {
      idx: 3,
      nombre: "Hornado",
      bio: "Cerdo asado lentamente, acompañado de mote, papas y ensalada.",
      img: "assets/img/hornado.png",
      aparicion: "Colonial",
      casa: "Sierra"
    },
    {
      idx: 4,
      nombre: "Encebollado",
      bio: "Sopa de pescado con yuca, cebolla encurtida y especias, popular para el desayuno en la costa.",
      img: "assets/img/encebollado.png",
      aparicion: "Moderna",
      casa: "Costa"
    },
    {
      idx: 5,
      nombre: "Humita",
      bio: "Preparación hecha de maíz tierno molido y cocinado en sus propias hojas, típicamente acompañada de queso.",
      img: "assets/img/humita.png",
      aparicion: "Precolombina",
      casa: "Sierra"
    },
    {
      idx: 6,
      nombre: "Guatita",
      bio: "Guiso de estómago de res cocido en una salsa de maní, acompañado de arroz y papas.",
      img: "assets/img/guatita.png",
      aparicion: "Moderna",
      casa: "Costa"
    },
    {
      idx: 7,
      nombre: "Fritada",
      bio: "Carne de cerdo frita, servida con mote, papas y maíz tostado.",
      img: "assets/img/fritada.png",
      aparicion: "Colonial",
      casa: "Sierra"
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
