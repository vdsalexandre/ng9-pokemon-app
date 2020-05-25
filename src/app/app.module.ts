import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { PokemonsModule } from './pokemons/pokemons.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
  
@NgModule({
  imports: [  // classes nécessaires au fonctionnnement du module
    BrowserModule,    // l'ordre d'importation des modules est important !!
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}), // format des données renvoyées encapsulées ou non
    PokemonsModule,
    LoginRoutingModule,
    AppRoutingModule 
  ],
  declarations: [ // classes de vues --> component, directive, pipes
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  providers: [
    Title // service title fourni à l'ensemble de l'app
  ],
  bootstrap: [ AppComponent ] // component racine (au lancement de l'application)
})
export class AppModule { }