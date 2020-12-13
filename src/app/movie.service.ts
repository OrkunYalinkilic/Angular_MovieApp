import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs'; // asenkron olarak gelen verileri işlemek için kullanırız.
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'   // Servisi kullanmak için öncelikle servisi kullanacağın yerde inject etmelisin(ctor). Gerisi aynı zaten.
})

export class MovieService {

  private apiMoviesUrl = 'api/movies';

  constructor(

    private loggingService: LoggingService, // loggingService ' ı inject işlemi yaptım.
    private http: HttpClient

  ) { }

  getMovies(): Observable<Array<Movie>> {
    this.loggingService.add("MovieService: Listing movies");
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }

  getMovie(id: number): Observable<Movie> {
    this.loggingService.add('MovieService: get detail by id=' + id);
    return of(Movies.find(movie => movie.id === id));
  }

  update(movie: Movie): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.http.put(this.apiMoviesUrl, movie, httpOptions);
  }

  add(movie:Movie) : Observable<Movie> {
    return this.http.post<Movie>(this.apiMoviesUrl,movie);
  }

}
