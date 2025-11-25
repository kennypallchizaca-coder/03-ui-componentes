import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daisy-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daisy-footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyFooterComponent {}
