import { Component } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  //Este componente que hace de layout, deberia tener la capacidad de ofrecer 
  //comunicacion RxJS entre todos los componente que esten dentro de este layout
  //Por lo tanto, el layout deberia tener un servicio de comunicacion que los demas 
  //componentes puedan usarlo para comunicarse
}
