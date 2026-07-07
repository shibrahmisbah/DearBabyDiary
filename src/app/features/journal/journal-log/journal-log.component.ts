import { Component } from '@angular/core';
import { BottomNavbarComponent } from '../../../shared/components/bottom-navbar/bottom-navbar.component';
import { MOCK_JOURNAL_ENTRIES } from '../../../data/mock-journal-entries';
import { NgFor } from '@angular/common';

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
  



}

