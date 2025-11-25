import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daisy-hover-3d-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daisy-hover-3d-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyHover3dCardComponent {}
