import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerIntl, MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
    DateAdapter,
    MAT_DATE_FORMATS, MAT_DATE_LOCALE,
    MAT_NATIVE_DATE_FORMATS,
    NativeDateAdapter,
    provideNativeDateAdapter
} from '@angular/material/core';
import {DeIntl} from "../de-intl.service";

/** @title Basic datepicker */
@Component({
    selector: 'datepicker-overview-example',
    templateUrl: 'datepicker-overview-example.html',
    standalone: true,
    providers: [
        // provideNativeDateAdapter(),
        // {
        //     provide: DateAdapter,
        //     useClass: NativeDateAdapter
        // },
        {provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS},
        {provide: MatDatepickerIntl, useClass: DeIntl},
        provideNativeDateAdapter(),
        {provide: MAT_DATE_LOCALE, useValue: 'de-DE'}
    ],
    imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerOverviewExample {
}


/**  Copyright 2025 Google LLC. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at https://angular.io/license */