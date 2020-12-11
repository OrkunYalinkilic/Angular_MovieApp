import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs'; // asenkron olarak gelen verileri işlemek için kullanırız.
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'   // Servisi kullanmak için öncelikle servisi kullanacağın yerde inject etmelisin(ctor). Gerisi aynı zaten.
})

export class MovieService {

  constructor(private loggingService: LoggingService) { } // loggingService ' ı inject işlemi yaptım.

  getMovies(): Observable<Array<Movie>> {
    this.loggingService.add("MovieService: Listing movies");
    return of(Movies);
  }


}
