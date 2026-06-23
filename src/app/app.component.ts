import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { JournalLogComponent } from './features/journal/journal-log/journal-log.component';
import { JournalEntryComponent } from './features/journal/journal-entry/journal-entry.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'journal-log', component: JournalLogComponent },
  { path: 'journal-entry', component: JournalEntryComponent }
];