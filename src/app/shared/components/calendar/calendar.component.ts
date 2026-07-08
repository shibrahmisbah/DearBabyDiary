import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction'; 
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarService } from '../../../services/calendar.service';

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
  constructor(private calendarService: CalendarService) {}


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
    alert('Date clicked: ' + arg.dateStr);
    }
}