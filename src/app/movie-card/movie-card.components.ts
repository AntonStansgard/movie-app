import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from '../pipes/duration-pipe';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule,DurationPipe],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie: any;

  @Output() favourite = new EventEmitter<string>();
  @Output() watchList = new EventEmitter<string>();

  addFavourite() {
    this.favourite.emit(this.movie.title);
  }

  addWatchList() {
    this.watchList.emit(this.movie.title);
  }
}