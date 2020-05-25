import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';
import { Title } from '@angular/platform-browser';
  
@Component({
    selector: 'list-pokemon',
    templateUrl: './app/pokemons/list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
    private pokemons: Pokemon[];
    private dateFormat: string = "dd/MM/yyyy";

    constructor(
        private router: Router, 
        private pokemonsService: PokemonsService,
        private titleService: Title
        ) { }

    ngOnInit(): void {
        this.pokemonsService.getPokemons()
            .subscribe(pokemons => {
                this.pokemons = pokemons;
                this.setTitlePage();
            });
    }

    selectPokemon(pokemon: Pokemon) {
        console.log(`vous avez cliqué sur ${pokemon.name} - ${pokemon.id}`);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }

    private setTitlePage(): void {
        let titles = this.titleService.getTitle().split("-");
        this.titleService.setTitle(titles[0].trim());
    }
}