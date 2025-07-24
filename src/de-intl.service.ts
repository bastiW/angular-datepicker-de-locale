import {Injectable} from "@angular/core";
import {MatDatepickerIntl} from "@angular/material/datepicker";

/**
 * German i18n messages for Angular-Material date-picker.
 */
@Injectable()
export class DeIntl extends MatDatepickerIntl {
  override calendarLabel              = 'Kalender';
  override openCalendarLabel          = 'Kalender öffnen';
  override closeCalendarLabel         = 'Kalender schließen';

  override nextMonthLabel             = 'Nächster Monat';
  override prevMonthLabel             = 'Vorheriger Monat';

  override nextYearLabel              = 'Nächstes Jahr';
  override prevYearLabel              = 'Vorheriges Jahr';

  override nextMultiYearLabel         = 'Nächste 24 Jahre';
  override prevMultiYearLabel         = 'Vorherige 24 Jahre';

  override switchToMonthViewLabel     = 'Zur Monatsansicht wechseln';
  override switchToMultiYearViewLabel = 'Zur Jahresansicht wechseln';

  override startDateLabel             = 'Startdatum';
  override endDateLabel               = 'Enddatum';

  /** “2020 – 2025” (used in the view header). */
  override formatYearRange(start: string, end: string): string {
    return `${start} – ${end}`;
  }

  /** “Jahre 2020 – 2025” (used for screen-reader labels). */
  override formatYearRangeLabel(start: string, end: string): string {
    return `Jahre ${start} – ${end}`;
  }
}