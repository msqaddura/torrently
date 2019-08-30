import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesModule } from './movies/movies.module';
import { DomainsModule } from './domains/domains.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MoviesModule,
    DomainsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
