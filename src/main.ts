import '@angular/localize/init';
import {importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import {VERSION as CDK_VERSION} from '@angular/cdk';
import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE, MAT_NATIVE_DATE_FORMATS,
  MatNativeDateModule,
  provideNativeDateAdapter,
  VERSION as MAT_VERSION,
} from '@angular/material/core';
import {DatepickerOverviewExample} from './example/datepicker-overview-example';
import {MatDatepickerIntl, MatDatepickerModule} from '@angular/material/datepicker';
import {DeIntl} from "./de-intl.service";

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);



bootstrapApplication(DatepickerOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),

    importProvidersFrom(
        MatDatepickerModule,
        MatNativeDateModule
    ),

    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE,   useValue: 'de-DE'           },
    provideNativeDateAdapter(),

    { provide: MatDatepickerIntl, useClass: DeIntl   },
  ],
}).catch(err => console.error(err));



