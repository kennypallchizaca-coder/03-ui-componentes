import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent {
  items = input<{ label: string; link?: string }[]>([]);
}
