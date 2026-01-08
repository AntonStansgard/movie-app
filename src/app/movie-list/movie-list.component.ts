import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie.service';
import { MovieCardComponent } from '../movie-card/movie-card.components';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies = signal<any[]>([]);
  favourites = signal<string[]>([]);
  watchList = signal<string[]>([]);

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(res => {
      this.movies.set(res.results);
    });
  }

  addToFavourites(title: string) {
    this.favourites.update(list => [...list, title]);
  }

  addToWatchList(title: string) {
    this.watchList.update(list => [...list, title]);
  }
}