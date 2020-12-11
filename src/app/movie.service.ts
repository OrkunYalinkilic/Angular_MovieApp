import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
@Injectable({
  providedIn: 'root'   // Servisi kullanmak için öncelikle servisi kullanacağın yerde inject etmelisin(ctor). Gerisi aynı zaten.
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    return Movies;
  }


}
