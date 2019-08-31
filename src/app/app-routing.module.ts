import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () =>
      import('./movies/movies.module').then(mod => mod.MoviesModule)
  },
  {
    component: HomeComponent,
    path: ''
  },
  { path: 'fourohfour', component: FourOhFourComponent },
  { path: '**', redirectTo: 'fourohfour' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
