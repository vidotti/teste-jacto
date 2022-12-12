import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
// import { environment } from "@environments/environment";
import { Router } from "@angular/router";


@Injectable({ providedIn: 'root' })
export class MovieService {
//   private readonly url = `${environment.url}`;
  apikey = '550b33e6296dc388fe01be1d7472cbae';

  constructor(
    private http: HttpClient,
    // private mensagemHelper: MensagemHelper,
    private router: Router
    ) {}
    
  getMovieById(id = undefined) : Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apikey}&language=pt-BR`)
  }


  getMovieGenres() : Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apikey}&language=pt-BR`)
  }


  getAllMovies(id: string, page: number, genre = undefined) : Observable<any>  {
    const params = new HttpParams()
    .set('api_key', this.apikey);
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}` 
      + `&page=${page}`
      + `&language=pt-BR`
      + `&include_adult=${false}`
      + `&with_genres=${genre}`
    );
    // https://api.themoviedb.org/3/collection/{collection_id}?api_key=<<api_key>>&language=en-US
  }


  getCertification(id: string) : Observable<any>  {
    const params = new HttpParams()
    .set('api_key', this.apikey);
    return this.http.get('https://api.themoviedb.org/3/movie/'+ id +'/release_dates', {params})

  }

  

}
