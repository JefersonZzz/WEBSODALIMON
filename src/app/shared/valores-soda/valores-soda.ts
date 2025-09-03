import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import feather from 'feather-icons';

@Component({
  selector: 'app-valores-soda',
  imports: [CommonModule],
  templateUrl: './valores-soda.html',
  styleUrl: './valores-soda.css'
})
export class ValoresSoda {
  valores = [
    { icon: 'award', titulo: 'Excelencia', descripcion: 'Estamos comprometidos con brindar frescura y calidad en cada sorbo de Soda Limón Perú.' },
    { icon: 'users', titulo: 'Cercanía', descripcion: 'Nos acercamos a las personas, compartiendo momentos únicos con cada bebida.' },
    { icon: 'heart', titulo: 'Pasión', descripcion: 'Amamos lo que hacemos y lo transmitimos en cada lata de Soda Limón.' },
    { icon: 'zap', titulo: 'Innovación', descripcion: 'Siempre buscamos nuevas formas de refrescar y sorprender a nuestros consumidores.' },
    { icon: 'leaf', titulo: 'Responsabilidad', descripcion: 'Cuidamos nuestro entorno y fomentamos un consumo consciente y sostenible.' }
  ];

  ngAfterViewInit() {
    feather.replace(); 
  }
}
