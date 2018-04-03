import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroesDataService } from '../heroes-data.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor( private heroDataService: HeroesDataService) { }

  ngOnInit() {
    this.heroDataService.getHeroes()
    .subscribe(heros => this.heroes = heros); 
  }

  getHeroes() {
    return this.heroDataService.getHeroes();
  }

}
