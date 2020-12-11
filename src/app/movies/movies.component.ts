import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html',
  // template: `<h2>{{"Title: " + getTitle()}}`,

})

export class MoviesComponent {

  title = "Movie List";
  movies = Array<Movie>();
  selectedMovie: Movie; // böylece bu değeri htmlde kullanabileceğim.

  constructor(private movieService: MovieService) { } //servisi inject etme işlemi

  ngOnInit(): void { // constructor dan sonra çalışan metotdur.
    this.getMovies();
  }

  getMovies(): void {
    this.movies = this.movieService.getMovies();
  }

  getTitle() {
    return this.title;
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
