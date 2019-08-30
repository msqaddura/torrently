import { Component, OnInit } from '@angular/core';
import { Route, ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MovieApiService } from 'src/app/domains/movie/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie$;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieApiService
  ) {}

  ngOnInit() {
    this.movie$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.movieService.getMovieById(+params.get('id'))
      )
    );
  }
}
