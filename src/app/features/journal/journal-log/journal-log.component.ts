import { Component } from '@angular/core';
import { BottomNavbarComponent } from '../../../shared/components/bottom-navbar/bottom-navbar.component';
import { MOCK_JOURNAL_ENTRIES } from '../../../data/mock-journal-entries';
import { NgFor } from '@angular/common';
import { JournalService } from '../../../services/journal.service';
import { CalendarService } from '../../../services/calendar.service';

@Component({
  selector: 'app-journal-log',
  standalone: true,
  imports: [BottomNavbarComponent, NgFor],
  templateUrl: './journal-log.component.html',
  styleUrl: './journal-log.component.scss'
})

/**Journal Log
 * Tasks:
 * Search by date/name of entry
 * Add/Remove Entry; Update # Of Entries
*/


export class JournalLogComponent {

  
  entries = MOCK_JOURNAL_ENTRIES;

  //add only title and desc.
  title = '';
  description = '';
  
  constructor(
      private calendarService: CalendarService,
      private journalService: JournalService
  ){}


  saveEntry() {

  this.journalService.addEntry({

    title: this.title,

    description: this.description,

    date: this.calendarService.getSelectedDate(),

    lastModified: new Date()

  });

}




}

