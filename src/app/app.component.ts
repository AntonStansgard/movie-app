import { Component } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}