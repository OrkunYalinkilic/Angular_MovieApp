import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common'; // sayfa üzerinde geri gitmeyi vs sağlamak için ekliyoruz.

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  //localhost:4200/detail/2 

  @Input() movie: Movie; // movie değeri dışardan alınacağı için başına @input() eklenir.

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute, // detail/2 deki id bilgisine (2) ulaşabilmek için bunu oluşturduk.
    private Location: Location // sayfa üzerinde location işlemlerinde kullanabilmek için bunu oluşturduk.
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {

    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);

  }

  save(): void {
    this.movieService.update(this.movie)
      .subscribe(() => {
        this.Location.back();
      });
  }

}
