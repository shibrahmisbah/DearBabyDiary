/**standalone true was missing */

/** 
import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FullCalendarModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line
})

/** 
export class App implements OnInit {

  constructor(){}


  ngOnInit(){
  }
  
  calendarPlugins = [dayGridPlugin];

}
**/

/** 
export class App {
  calendarOptions: CalendarOptions = {
    // 1. Register the plugins here
    plugins: [dayGridPlugin], 
    
    // 2. Assign the view type name 
    initialView: 'dayGridMonth', 
    
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth'
    }
  };
}
**/

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}