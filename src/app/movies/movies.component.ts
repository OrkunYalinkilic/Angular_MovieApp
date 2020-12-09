import { Component } from '@angular/core';
import { Movie } from '../movie';
import { Movies } from '../movie.datasource';

@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html',
  // template: `<h2>{{"Title: " + getTitle()}}`,

})
export class MoviesComponent {

  title = "Movie List";

  getTitle() {
    return this.title;
  }

  movies = Movies;
  selectedMovie: Movie; // böylece bu değeri htmlde kullanabileceğim.

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
