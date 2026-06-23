import { Component } from '@angular/core';
import { BottomNavbarComponent } from '../../../shared/components/bottom-navbar/bottom-navbar.component';


@Component({
  selector: 'app-journal-entry',
  standalone: true,
  imports: [BottomNavbarComponent],
  templateUrl: './journal-entry.component.html',
  styleUrl: './journal-entry.component.scss'
})
export class JournalEntryComponent {

}