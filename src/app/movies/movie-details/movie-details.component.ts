import { Component, OnInit } from '@angular/core';
import { Route, ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MovieApiService } from 'src/app/domains/movie/movie-api.service';
import { Movie } from 'src/app/domains/movie/movie.model';
import { MatDialog } from '@angular/material/dialog';
import { YoutubeEmbedComponent } from 'src/app/shared/components/youtube-embed/youtube-embed.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieApiService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.movieService.getMovieById(+params.get('id'))
        )
      )
      .subscribe(movie => {
        this.movie = movie;
      });
  }

  showTrailer(trailer: string) {
    this.dialog.open(YoutubeEmbedComponent, {
      width: '60%',
      height: '60%',
      data: { videoURL: trailer }
    });
  }
}
