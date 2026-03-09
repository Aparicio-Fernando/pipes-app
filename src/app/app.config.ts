import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import localesEs from '@angular/common/locales/es-AR';
import localesFr from '@angular/common/locales/fr';

registerLocaleData(localesEs, 'es');
registerLocaleData(localesFr, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ]
};
