import { Component } from '@angular/core';
import { BottomNavbarComponent } from '../../../shared/components/bottom-navbar/bottom-navbar.component';
import { MOCK_JOURNAL_ENTRIES } from '../../../data/mock-journal-entries';
import { NgFor } from '@angular/common';
import { JournalService } from '../../../services/journal.service';
import { CalendarService } from '../../../services/calendar.service';
import { ActivatedRoute } from '@angular/router';


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
  selectedDate = '';
  
  constructor(
      private calendarService: CalendarService,
      private journalService: JournalService,
      private route: ActivatedRoute
  ){}

  //retrieve selected date in journal log
  ngOnInit() {
        //this.selectedDate = this.calendarService.getSelectedDate()
        this.selectedDate = this.route.snapshot.paramMap.get('date') ?? '';
  }

/*
  saveEntry() {

  this.journalService.addEntry({

    title: this.title,

    description: this.description,

    date: this.calendarService.getSelectedDate(),

    lastModified: new Date()

  });

}**/


}

