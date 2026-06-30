import { Component } from '@angular/core';
import { BottomNavbarComponent } from '../../shared/components/bottom-navbar/bottom-navbar.component';
import { RouterLink } from '@angular/router';
import { CalendarComponent } from '../../shared/components/calendar/calendar.component';
import { MOCK_JOURNAL_ENTRIES } from '../../data/mock-journal-entries';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BottomNavbarComponent, RouterLink, CalendarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  onDateSelected(date: string) {
  console.log('Selected date:', date);
}


entries = MOCK_JOURNAL_ENTRIES;
selectedDate = '2026-06-28';


get entriesForSelectedDate() {
  return this.entries.filter(
    entry => entry.date === this.selectedDate
  );
}

}