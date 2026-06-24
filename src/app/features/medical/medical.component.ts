import { Component } from '@angular/core';
import { BottomNavbarComponent } from '../../shared/components/bottom-navbar/bottom-navbar.component';


@Component({
  selector: 'medical',
  standalone: true,
  imports: [ BottomNavbarComponent ],
  templateUrl: './medical.component.html',
  styleUrl: './medical.component.scss'
})
export class MedicalComponent {

}