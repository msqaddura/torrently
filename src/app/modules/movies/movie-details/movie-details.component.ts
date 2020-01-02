import { Component, OnInit } from '@angular/core';
import { Route, ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { YoutubeEmbedComponent } from 'src/app/shared/components/youtube-embed/youtube-embed.component';
import { Movie } from 'src/app/shared/integration/movies/movies.interfaces';
import { MoviesClientService } from 'src/app/shared/integration/movies/movies-client.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie = null;
  constructor(
    private route: ActivatedRoute,
    private moviesClient: MoviesClientService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.moviesClient.getMovieDetails(params.get('id'))
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
