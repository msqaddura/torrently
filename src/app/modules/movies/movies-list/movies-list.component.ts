import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/domains/movie/movie-api.service';
import { genreType } from 'src/app/domains/movie/movie.model';
import { MoviesClientService } from 'src/app/shared/integration/movies/movies-client.service';
import { Movie } from 'src/app/shared/integration/movies/movies.interfaces';

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
  constructor(private moviesClient: MoviesClientService) {}

  ngOnInit() {
    this.moviesClient.getMovieList().subscribe(response => {
      this.movies = response.MovieList;
    });
  }

  canShow(movie: Movie) {
    return (
      movie.title
        .toLocaleLowerCase()
        .indexOf(this.filters.name.toLocaleLowerCase()) !== -1 &&
      movie.genres.findIndex(genre => genre.indexOf(this.filters.genre))
    );
  }
}
