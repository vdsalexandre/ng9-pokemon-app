import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
  
@Component({
  selector: 'list-pokemon',
  templateUrl: './app/pokemons/list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
    private pokemons: Pokemon[];
    private dateFormat: string = "dd/MM/yyyy";

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.pokemons = POKEMONS;
    }

    selectPokemon(pokemon: Pokemon) {
        console.log(`vous avez cliqué sur ${pokemon.name}`);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
}