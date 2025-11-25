import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daisy-mock-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daisy-mock-code.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyMockCodeComponent {}
