import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { movies } from './movie.mock-data';
import { GenreType } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  constructor() {}
  getMovieList() {
    return of(movies);
  }

  getMovieById(id: number) {
    return of(movies.find(item => item.id === id));
  }

  // Imagine we have database of movies, we rather than query the movies by filter,
  getMovieListByGenre(genreType: GenreType) {
    return of(movies).pipe(
      map(movieList =>
        movieList.filter(movie =>
          movie.genres.findIndex(genre => genre === genreType)
        )
      )
    );
  }
}
