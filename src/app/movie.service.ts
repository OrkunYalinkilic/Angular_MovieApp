import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs'; // asenkron olarak gelen verileri işlemek için kullanırız.

@Injectable({
  providedIn: 'root'   // Servisi kullanmak için öncelikle servisi kullanacağın yerde inject etmelisin(ctor). Gerisi aynı zaten.
})

export class MovieService {

  constructor() { }

  getMovies(): Observable<Array<Movie>> {
    return of(Movies);
  }


}
