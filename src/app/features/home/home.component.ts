import { Component } from '@angular/core';
import { BottomNavbarComponent } from '../../shared/components/bottom-navbar/bottom-navbar.component';
import { RouterLink } from '@angular/router';
import { CalendarComponent } from '../../shared/components/calendar/calendar.component';



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

}