import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-navbar-drawer',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive, ThemeSwitcherComponent],
  templateUrl: './navbar-drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarDrawerComponent {}
