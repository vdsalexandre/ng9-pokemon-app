import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { PokemonsModule } from './pokemons/pokemons.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
  
@NgModule({
  imports: [  // classes nécessaires au fonctionnnement du module
    BrowserModule,    // l'ordre d'importation des modules est important !!
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}), // format des données renvoyées encapsulées ou non
    PokemonsModule, 
    AppRoutingModule 
  ],
  declarations: [ // classes de vues --> component, directive, pipes
    AppComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ] // component racine (au lancement de l'application)
})
export class AppModule { }