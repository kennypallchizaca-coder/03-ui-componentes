import { Injectable } from '@angular/core';

const THEME_KEY = 'app-theme';
const DEFAULT_THEME = 'light';
const AVAILABLE_THEMES = ['light', 'dark', 'abyss'] as const;
type Theme = (typeof AVAILABLE_THEMES)[number];

@Injectable({ providedIn: 'root' })
export class ThemeService {
  getStoredTheme(): Theme {
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored && this.isValidTheme(stored)) {
        return stored;
      }
    } catch (error) {
      console.warn('No se pudo leer el tema desde localStorage', error);
    }
    return DEFAULT_THEME;
  }

  getActiveTheme(): Theme {
    const current = document.documentElement.getAttribute('data-theme');
    if (current && this.isValidTheme(current)) {
      return current;
    }
    return this.getStoredTheme();
  }

  setTheme(theme: string): Theme {
    const nextTheme = this.ensureValidTheme(theme);
    this.applyTheme(nextTheme);
    this.persistTheme(nextTheme);
    return nextTheme;
  }

  applyTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', this.ensureValidTheme(theme));
  }

  private persistTheme(theme: Theme): void {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (error) {
      console.warn('No se pudo guardar el tema en localStorage', error);
    }
  }

  private ensureValidTheme(theme: string): Theme {
    return this.isValidTheme(theme) ? (theme as Theme) : DEFAULT_THEME;
  }

  private isValidTheme(theme: string): theme is Theme {
    return AVAILABLE_THEMES.includes(theme as Theme);
  }
}
