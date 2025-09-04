import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Carousel } from './shared/carousel/carousel';
import { PromoCard } from './shared/promo-card/promo-card'; 
import { Herobanner } from './shared/herobanner/herobanner';
import { Footer } from './shared/footer/footer';
import { EsenciaProposito } from './shared/esencia-proposito/esencia-proposito';
import { ValoresSoda } from './shared/valores-soda/valores-soda';
import { HistoriaSoda } from './shared/historia-soda/historia-soda';
import { Contactanos } from './shared/contactanos/contactanos';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Carousel, PromoCard, Herobanner, Footer, 
    EsenciaProposito, ValoresSoda, HistoriaSoda, Contactanos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
