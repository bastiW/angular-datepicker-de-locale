import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyDatepicker} from "./my-datepicker.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerIntl, MatDatepickerModule} from "@angular/material/datepicker";
import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MAT_NATIVE_DATE_FORMATS,
  MatNativeDateModule,
  provideNativeDateAdapter
} from "@angular/material/core";
import {DeIntl} from "../../../de-intl.service";


@NgModule({
  declarations: [MyDatepicker],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule
  ],
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS},
    {provide: MatDatepickerIntl, useClass: DeIntl},
    provideNativeDateAdapter(),
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'}
  ],
  exports: [
    MyDatepicker
  ]
})
export class MyDatepickerModule { }
