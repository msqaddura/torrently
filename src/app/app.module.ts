import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesModule } from './modules/movies/movies.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { YoutubeEmbedComponent } from './shared/components/youtube-embed/youtube-embed.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, FourOhFourComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MoviesModule,
    SharedModule
  ],
  entryComponents: [YoutubeEmbedComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
