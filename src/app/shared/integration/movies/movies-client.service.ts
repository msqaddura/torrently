import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieListResponse, Movie } from './movies.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesClientService {
  url = 'https://api.apiumadomain.com';
  constructor(private httpClient: HttpClient) {}

  getMovieList() {
    return this.httpClient.get<MovieListResponse>(
      `${this.url}/list?sort=seeds&short=1&cb=&quality=720p,1080p,3d&page=1`
    );
  }

  getMovieDetails(imdb: string) {
    return this.httpClient.get<Movie>(
      `${this.url}/movie?cb=&quality=720p,1080p,3d&page=1&imdb=${imdb}`
    );
  }
}
