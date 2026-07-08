import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction'; 
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarService } from '../../../services/calendar.service';

//step 1. inject router
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar-widget',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})

export class CalendarComponent {

  @Input() events: any[] = [];

  @Output() dateSelected = new EventEmitter<string>();


  //Inject Service 
  constructor(
    private calendarService: CalendarService,
    private router: Router
  ) {}


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin,interactionPlugin],

    //events: this.events,

    //set selected date and store it in the date field
    /**
    dateClick: (info) => {
      this.handleDateClick.bind(this);
      console.log(info.dateStr);
      this.calendarService.setSelectedDate(info.dateStr);
    }
  */
    //handles click and binds "this"
    dateClick: this.handleDateClick.bind(this),
    //allows each date to be selected
    selectable: true

  };

    handleDateClick(arg: any) {
    
      //save selected date & navigate to journal log page
      this.calendarService.setSelectedDate(arg.dateStr);
      console.log("Selected date:", arg.dateStr);
      this.router.navigate(['/journal-log', arg.dateStr]);      //alert('Date clicked: ' + arg.dateStr);
    }
}