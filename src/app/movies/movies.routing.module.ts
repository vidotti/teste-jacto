import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const moviesRoutes: Routes = [

  {
    path: 'movies',
    children: [
      { path: '', component: MoviesComponent },
      { path: 'movie', component: MovieDetailComponent },
      { path: 'movie/:id', component: MovieDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(moviesRoutes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
