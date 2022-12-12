import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../_services/movie.service';
import { NgxSpinnerService } from "ngx-spinner";
// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {

  selectedGenre = '0';

  totalMovies = 0;
  readonly listaPaginas: number[] = [];
  qtdTotalDePaginas: any;
  limitePaginasVisiveis = 6;
  numeroDaPagina = 1;

  formulario: FormGroup;

  movies: any = [];
  movieGenres: any = [];

  constructor(
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private router: Router,
    private movieService: MovieService
  ){
    this.selectedGenre = '0';
  }

  ngOnInit(){
    this.spinner.show();
    this.initializeForm();
    this.getMovieGenres();
    this.getAllMovies();
    
  }

  initializeForm(){
    this.formulario = this.formBuilder.group({
      genre: ['0', []],
    });

    this.formulario.get('genre')?.valueChanges.subscribe( x => {
      if (x == 0) {
        this.getAllMovies();
      } else {
        // this.selectedGenre = x;
        this.getAllMovies(x);
      }
    });
    
  }

  onEdit(id: number) {
    this.router.navigate(['/movies/movie', id]);
  }

  getMovieGenres(){
    this.movieService.getMovieGenres().subscribe((res: any) => {
      this.movieGenres = res.genres
  }, 
    () => {}
  );
  }


  getAllMovies(genre = undefined){
    this.spinner.show();
    this.movieService.getAllMovies('3', this.numeroDaPagina, genre).subscribe((res: any) => {
      this.spinner.hide();
      this.movies = res.results

      this.totalMovies = res.total_results || 0;
      this.qtdTotalDePaginas = 500;
      this.gerarPaginas();

    }, 
    // console.log('movies', this.movies)
    () => {}
  );
  }

  trocarPagina(pagina: number) {
    this.numeroDaPagina = pagina;
    this.getAllMovies();
  }


  private gerarPaginas() {
    this.listaPaginas.length = 0;
    const metadeLimitePaginas = (this.limitePaginasVisiveis / 2);
    let inicioLista;

    if (this.numeroDaPagina === 1) {
      inicioLista = this.numeroDaPagina;
    } else if (this.numeroDaPagina === this.qtdTotalDePaginas) {
      if (this.numeroDaPagina >= this.limitePaginasVisiveis) {
        inicioLista = this.qtdTotalDePaginas - this.limitePaginasVisiveis + 1;
      } else {
        inicioLista = 1;
      }
    } else if (this.numeroDaPagina > metadeLimitePaginas) {
      inicioLista = this.numeroDaPagina - metadeLimitePaginas;
    } else {
      inicioLista = 1;
    }

    for (let i = inicioLista; i <= this.qtdTotalDePaginas && this.listaPaginas.length < this.limitePaginasVisiveis; i++) {
      this.listaPaginas.push(i);
    }
  }
  
}
