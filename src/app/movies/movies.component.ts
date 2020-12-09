import { Component } from '@angular/core';
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

  /*movie: Movie = {
    id: 1,
    name: 'Movie Name'
  }*/

  movies = Movies;

}
