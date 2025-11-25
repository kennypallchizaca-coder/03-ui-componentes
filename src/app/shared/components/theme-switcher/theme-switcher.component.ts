import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './theme-switcher.component.html',
})
export class ThemeSwitcherComponent {
  themes: string[] = ['light', 'dark', 'abyss'];

  private themeService = inject(ThemeService);
  currentTheme = signal<string>(this.themeService.getActiveTheme());

  constructor() {
    const stored = this.themeService.getStoredTheme();
    this.themeService.applyTheme(stored);
    this.currentTheme.set(stored);
  }

  setTheme(theme: string): void {
    const applied = this.themeService.setTheme(theme);
    this.currentTheme.set(applied);
  }
}
