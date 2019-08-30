import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/domains/movie/movie-api.service';
import { Movie } from 'src/app/domains/movie/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieApiService) {}

  ngOnInit() {
    this.movieService.getMovieList().subscribe(movies => {
      this.movies = movies;
    });
  }
}
