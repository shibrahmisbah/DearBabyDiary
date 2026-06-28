/**mistake: i made two files that are root components
 * fix: use the file that is boostrapped in main.ts
 * solution: fixed up app.ts 
 *           need to add routing to app.routes.ts
 */

/** 

import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { JournalLogComponent } from './features/journal/journal-log/journal-log.component';
import { JournalEntryComponent } from './features/journal/journal-entry/journal-entry.component';
import { CalendarComponent } from './shared/components/calendar/calendar.component';
import { BottomNavbarComponent } from './shared/components/bottom-navbar/bottom-navbar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { MedicalComponent } from './features/medical/medical.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home',pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'journal-log', component: JournalLogComponent },
  { path: 'journal-entry', component: JournalEntryComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'bottom-navbar', component: BottomNavbarComponent },
  { path: 'header-component', component: HeaderComponent },
  { path: 'search-bar', component: SearchBarComponent },
  { path: 'medical', component: MedicalComponent }

];
*/

//added default routes; removed UI elements: header, navbar, searchbar
import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { JournalLogComponent } from './features/journal/journal-log/journal-log.component';
import { JournalEntryComponent } from './features/journal/journal-entry/journal-entry.component';
import { MedicalComponent } from './features/medical/medical.component';
import { SkillsComponent } from './features/skills/skills.component';

export const routes: Routes = [

  /** default route */
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  /** main pages */
  { path: 'home', component: HomeComponent },

  /** journal system */
  { path: 'journal-log', component: JournalLogComponent },
  { path: 'journal-entry', component: JournalEntryComponent },

  /** medical section */
  { path: 'medical', component: MedicalComponent },
  { path: 'skills', component: SkillsComponent },

  /** fallback (optional but recommended) */
  { path: '**', redirectTo: 'home' }
];

