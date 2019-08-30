import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './components/rating/rating.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RatingComponent],
  imports: [CommonModule, MatIconModule],
  exports: [RatingComponent]
})
export class SharedModule {}
