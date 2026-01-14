import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone:true
})
export class DurationPipe implements PipeTransform {

  transform(minutes: number): string {
    if (!minutes) return '00:00:00';

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const seconds = 0;

    return `${this.pad(hours)}:${this.pad(mins)}:${this.pad(seconds)}`;
  }

  private pad(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
