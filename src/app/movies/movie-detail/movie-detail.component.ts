import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {

  movie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ){

  }

  ngOnInit(){
    this.buscaCliente()
  }
  
  
  buscaCliente() {
    // console.log('paramsID', this.route.snapshot.params['id'])
    if (this.route.snapshot.params['id']) {
      this.movieService.getMovieById(this.route.snapshot.params['id']).subscribe(
        data => {
  
          this.movie = data;
  
        },
        error => {
          
        }
      );
    }
  }


}

