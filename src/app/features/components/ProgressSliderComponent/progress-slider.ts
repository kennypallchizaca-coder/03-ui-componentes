import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-slider.html',
  host: { class: 'w-full' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressSliderComponent {
  progreso = signal<number>(40);

  actualizarProgreso(event: Event) {
    const input = event.target as HTMLInputElement;
    const nuevoValor = Number(input.value);
    this.progreso.set(nuevoValor);
  }
}
