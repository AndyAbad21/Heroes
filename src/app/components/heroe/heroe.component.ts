import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {
  public heroe: Heroe = {
    idx: -1,
    nombre: "",
    bio: "",
    img: "",
    aparicion: "",
    casa: ""
  };
  constructor(private _heroesServices: HeroesService,
    private activatedRoute: ActivatedRoute
  ) {
    // this.heroe=this._heroesServices.getHeroes()[0];
    this.activatedRoute.params.subscribe(parametros => {
      console.log('parametros', parametros);
      this.heroe = this._heroesServices.getHeroe(parametros['id1']);
      console.log('heroe local:',this.heroe);
    })
  }
}
