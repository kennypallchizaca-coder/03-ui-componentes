import { Component, signal } from '@angular/core';
import { SignalBoxComponent } from './features/components/SignalBoxComponent/signal-box';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignalBoxComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TailwindCSS en accion');
}
