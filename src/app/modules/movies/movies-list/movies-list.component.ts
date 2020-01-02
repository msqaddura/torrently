import { Component, OnInit } from '@angular/core';
import { MoviesClientService } from 'src/app/shared/integration/movies/movies-client.service';
import { Movie } from 'src/app/shared/integration/movies/movies.interfaces';
import { GenreTypeEnum } from 'src/app/shared/integration/movies/movies.enums';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];
  genres = GenreTypeEnum;
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
