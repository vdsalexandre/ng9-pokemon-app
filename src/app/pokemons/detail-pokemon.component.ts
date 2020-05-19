import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';
  
@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/pokemons/detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
    pokemon: Pokemon = null;
  
    constructor(
        private route: ActivatedRoute, 
        private router: Router, 
        private pokemonsService: PokemonsService) {}
  
    ngOnInit(): void {
        let id = +this.route.snapshot.paramMap.get('id'); // snapshot --> synchrone, l'appli est bloquée tant qu'on a pas recup le param
        console.log("detail component: id = " + id);
        this.pokemon = this.pokemonsService.getPokemon(id);
    }
  
    goBack(): void {
        this.router.navigate(['/pokemons']);
    }
  
}