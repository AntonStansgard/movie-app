import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<any>(
      `${environment.apiUrl}/movie/popular?api_key=${environment.apiKey}`
    );
  }
}