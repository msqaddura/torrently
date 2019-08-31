if you witnessed any weird navigation behaviour on the github page, read this:
https://shermandigital.com/blog/fix-404-errors-from-angular-projects-hosted-on-github-pages/

# Torrently

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---

#### Technologies:

- [Angular](https://angular.io/) (2 or higher)
- [TypeScript](https://www.typescriptlang.org/)
- [Rxjs](https://github.com/ReactiveX/rxjs)
- [Sass](http://sass-lang.com/)
- [Angular Material](https://material.angular.io/)

### Features:

- **Overall**
  - App-Like structure & navigation
  - Responsive Layout
  - Flat Design UI
  - Straight Forward UX
  - Lazy Loading
  - Unit Tests (minimal)
  - Routing
  - Hosted on GitHub Pages
- **Movies List**

  - List Movies.
  - Search.
  - Clicking on a particular movie will redirect you to the selected &#39;movie detail&#39; page.
  - Filter by genre (Anded with Search)

- **Movie detail**
  - Show selected movie detail information.
  - Navigate back to &#39;movie list&#39;.
  - Watch Trailer
  - Star Rates
  - Genre List

### Notes:

There are README files in folders where need be.

- **Overall**

  - `trailers are random and not correct` just to showcase the feature

- **Coding**
  - State Management was not used, as the CRUDs are mocked & tiny
  - the mocked data is imported as is (filteration, and projection) in real life scenario there shall be more api calls
    with ids and params
  - `is there a "pages" folder?` not at the moment

### The True Fruit

- **Changes needed**

  - seperate the movie seach & filter from each another since the user is not fishing for a movie
  - use a side bar for all actions and ad filter by popularity, date, rate
  - connect to a real API with lots of movies

- **Future Vision**
  - use torrent/webrtc to play movies/torrent online (success rate of finding compatible video is less than 1%)
  - chatroom per movie..........awesome theatre

#### References

- [ReactiveXHub](https://msqaddura.github.io/ReactiveXHub/)
- [WebTorrent](https://webtorrent.io/)
- [GHPages](https://pages.github.com/)
