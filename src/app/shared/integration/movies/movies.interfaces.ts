export interface Movie {
  actors: string;
  description: string;
  directors: string;
  genres: string[];
  id: string;
  imdb: string;
  items: any[];
  items_lang: any[];
  popularity: string;
  poster_big: string;
  poster_med: string;
  rating: number;
  runtime: number;
  title: string;
  trailer: string;
  writers: string;
  year: number;
}

export interface MovieListResponse {
  MovieList: Movie[];
}
