import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daisy-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daisy-product-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyProductCardComponent {}
