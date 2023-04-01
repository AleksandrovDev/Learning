import { Component } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
})
export class HeroSearchComponent {
  heroes$!: Observable<Hero[]>;
  private queries = new Subject<string>();

  constructor(private heroService: HeroService) {}

  search(query: string): void {
    this.queries.next(query);
  }

  ngOnInit(): void {
    this.heroes$ = this.queries.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((query: string) => this.heroService.searchHeroes(query)),
    );
  }
}
