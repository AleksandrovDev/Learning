import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mockHeroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = HEROES;
  selectedHero: Hero | undefined;
  hero: Hero = {
    id: 0,
    name: 'Windstorm',
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
