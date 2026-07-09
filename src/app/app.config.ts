import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration()
  ]
};