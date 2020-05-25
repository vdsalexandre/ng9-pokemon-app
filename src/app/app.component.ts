import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
  
@Component({
  selector: 'pokemon-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Don't touch my pokedex");
  }

 }