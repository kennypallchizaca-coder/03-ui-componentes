import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-simpsons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-simpsons.component.html',
})
export class HeroSimpsonsComponent {
  simpsonsCount = input.required<number>();
  totalPages = input.required<number>();
}
