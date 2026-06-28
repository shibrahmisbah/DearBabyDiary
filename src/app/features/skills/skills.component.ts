import { Component } from '@angular/core';
import { BottomNavbarComponent } from '../../shared/components/bottom-navbar/bottom-navbar.component';


@Component({
  selector: 'skills',
  standalone: true,
  imports: [ BottomNavbarComponent ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}