import { Component, OnInit, Input, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

export interface YoutubeEmbed {
  videoURL: string;
}

@Component({
  selector: 'app-youtube-embed',
  templateUrl: './youtube-embed.component.html',
  styleUrls: ['./youtube-embed.component.scss']
})
export class YoutubeEmbedComponent implements OnInit {
  @Input() videoURL: string;
  safeURL = null;
  constructor(
    private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<YoutubeEmbedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: YoutubeEmbed
  ) {}

  ngOnInit() {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.data.videoURL}?autoplay=1`
    );
  }
}
