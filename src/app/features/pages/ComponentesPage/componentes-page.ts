import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalBoxComponent } from '../../components/SignalBoxComponent/signal-box';

@Component({
  selector: 'app-componentes-page',
  standalone: true,
  imports: [CommonModule, SignalBoxComponent],
  templateUrl: './componentes-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentesPageComponent {
  title = signal('TailwindCSS en accion');
}
