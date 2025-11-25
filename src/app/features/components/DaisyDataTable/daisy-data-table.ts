import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daisy-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daisy-data-table.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyDataTableComponent {}
