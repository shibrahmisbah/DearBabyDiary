import { Component } from '@angular/core';
import { BottomNavbarComponent } from '../../shared/components/bottom-navbar/bottom-navbar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BottomNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}