import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contactanos',
  imports: [FormsModule],
  templateUrl: './contactanos.html',
  styleUrl: './contactanos.css'
})
export class Contactanos {
  correo: string = '';

  enviarCorreo() {
    console.log('Correo enviado:', this.correo);
    alert('¡Gracias por contactarnos!');
  }
}
