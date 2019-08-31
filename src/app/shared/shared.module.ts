import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './components/rating/rating.component';
import { MatIconModule } from '@angular/material/icon';
import { YoutubeEmbedComponent } from './components/youtube-embed/youtube-embed.component';

@NgModule({
  declarations: [RatingComponent, YoutubeEmbedComponent],
  imports: [CommonModule, MatIconModule],
  exports: [RatingComponent, YoutubeEmbedComponent]
})
export class SharedModule {}
