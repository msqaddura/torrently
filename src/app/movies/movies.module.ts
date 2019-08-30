import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MoviesListComponent],
  imports: [CommonModule, MoviesRoutingModule, MatToolbarModule, MatIconModule]
})
export class MoviesModule {}
