import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/domains/movie/movie-api.service';
import { Movie, genreType } from 'src/app/domains/movie/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];
  genres = genreType;
  filters = {
    name: '',
    genre: ''
  };
  constructor(private movieService: MovieApiService) {}

  ngOnInit() {
    this.movieService.getMovieList().subscribe(movies => {
      this.movies = movies;
    });
  }

  canShow(movie: Movie) {
    return (
      movie.name
        .toLocaleLowerCase()
        .indexOf(this.filters.name.toLocaleLowerCase()) !== -1 &&
      movie.genres.findIndex(genre => genre.indexOf(this.filters.genre))
    );
  }
}
