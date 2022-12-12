import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesRoutingModule } from './movies.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent,
  ],
  imports: [
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MoviesRoutingModule,
  ],
  exports: [

  ]
})
export class MoviesModule { }
