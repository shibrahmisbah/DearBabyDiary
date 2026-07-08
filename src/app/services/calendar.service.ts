//storing selected date in the date field
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private selectedDateSubject = new BehaviorSubject<string>('');

  selectedDate$ = this.selectedDateSubject.asObservable();

  setSelectedDate(date: string) {
    this.selectedDateSubject.next(date);
  }

  getSelectedDate(): string {
    return this.selectedDateSubject.value;
  }
}