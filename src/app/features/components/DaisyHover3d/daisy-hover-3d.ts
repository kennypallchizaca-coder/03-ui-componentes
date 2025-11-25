import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daisy-hover-3d',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daisy-hover-3d.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyHover3dComponent {}
