import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
createDb() {
  const heroes = [
    {id: 1, name: 'Iron Man'},
{id: 2, name: 'Captain America'},
{id: 3, name: 'SuperMan'},
{id: 4, name: 'Batman'},
{id: 5, name: 'Hulk'},
{id: 6, name: 'Thor'},
{id: 7, name: 'AquaMan'},
{id: 8, name: 'Flash'},
{id: 9, name: 'Vision'},
{id: 10, name: 'Hawkeye'},
{id: 11, name: 'Arrow'}
  ];
  return {heroes};
}
genId(heroes: Hero[] ): number {
  return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id )) + 1 : 11 ;
}
  constructor() { }
}
