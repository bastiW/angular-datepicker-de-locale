import '@angular/localize/init';
import {importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import {VERSION as CDK_VERSION} from '@angular/cdk';
import {
  MAT_DATE_LOCALE,
  MatNativeDateModule,
  provideNativeDateAdapter,
  VERSION as MAT_VERSION,
} from '@angular/material/core';
import {MyDatepicker} from './app/my-form/my-datepicker/my-datepicker.component';
import {MatDatepickerIntl} from '@angular/material/datepicker';
import {DeIntl} from "./de-intl.service";

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);



bootstrapApplication(MyDatepicker, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),


  ],
}).catch((err) => console.error(err));