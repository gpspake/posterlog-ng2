import {Injectable} from '@angular/core';
import {Poster} from './poster.model';

@Injectable()
export class PostersService {
  private posters: Poster[] = [
    {name: 'Poster 1', description: 'This is a poster'},
    {name: 'Poster 2', description: 'This is a poster'},
    {name: 'Poster 3', description: 'This is a poster'},
    {name: 'Poster 4', description: 'This is a poster'},
    {name: 'Poster 5', description: 'This is a poster'},
    {name: 'Poster 6', description: 'This is a poster'},
    {name: 'Poster 7', description: 'This is a poster'},
    {name: 'Poster 8', description: 'This is a poster'},
    {name: 'Poster 9', description: 'This is a poster'},
    {name: 'Poster 10', description: 'This is a poster'},
    {name: 'Poster 11', description: 'This is a poster'},
    {name: 'Poster 12', description: 'This is a poster'},
    {name: 'Poster 13', description: 'This is a poster'},
    {name: 'Poster 14', description: 'This is a poster'},
    {name: 'Poster 15', description: 'This is a poster'}
  ];

  getPosters(): Poster[] {
    return this.posters;
  };
}
