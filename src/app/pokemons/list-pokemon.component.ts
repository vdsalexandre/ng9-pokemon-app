import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';
  
@Component({
    selector: 'list-pokemon',
    templateUrl: './app/pokemons/list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
    private pokemons: Pokemon[];
    private dateFormat: string = "dd/MM/yyyy";

    constructor(private router: Router, private pokemonsService: PokemonsService) { }

    ngOnInit(): void {
        this.pokemons = this.pokemonsService.getPokemons();
    }

    selectPokemon(pokemon: Pokemon) {
        console.log(`vous avez cliqué sur ${pokemon.name} - ${pokemon.id}`);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
}