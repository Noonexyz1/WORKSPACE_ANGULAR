import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  //Este componente que hace de layout, deberia tener un Servicio (config) para ofrecer 
  //comunicacion RxJS entre todos los componente que esten dentro de este layout para que los demas 
  //componentes puedan usarlo para comunicarse
}
