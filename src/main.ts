import '@angular/localize/init';
import {importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import {VERSION as CDK_VERSION} from '@angular/cdk';
import {VERSION as MAT_VERSION,} from '@angular/material/core';

import {MyDatepickerModule} from "./app/my-form/my-datepicker/my-datepicker.module";
import {MyFormComponent} from "./app/my-form/my-form.component";

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);



bootstrapApplication(MyFormComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MyDatepickerModule),


  ],
}).catch((err) => console.error(err));