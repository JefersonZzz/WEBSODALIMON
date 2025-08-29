import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Carousel } from './shared/carousel/carousel';
import { PromoCard } from './shared/promo-card/promo-card'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Carousel, PromoCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
