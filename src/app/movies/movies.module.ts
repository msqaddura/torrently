import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MoviesListComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatToolbarModule,
    MatIconModule,
    SharedModule
  ]
})
export class MoviesModule {}
