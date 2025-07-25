import { Component } from '@angular/core';
import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MAT_NATIVE_DATE_FORMATS,
  provideNativeDateAdapter
} from "@angular/material/core";
import {MatDatepickerIntl, MatDatepickerModule} from "@angular/material/datepicker";
import {DeIntl} from "../../de-intl.service";

import {MyDatepickerModule} from "./my-datepicker/my-datepicker.module";

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [MyDatepickerModule],

  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss'
})
export class MyFormComponent {

}
