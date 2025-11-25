import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daisy-responsive-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daisy-responsive-cards.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyResponsiveCardsComponent {}
