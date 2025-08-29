import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Slide {
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class Carousel implements OnInit, OnDestroy {
  @Input() backgroundImage: string = ''; // Imagen de fondo personalizada
  @Input() backgroundOpacity: number = 1; // Opacidad del fondo

  slides: Slide[] = [
    {
      title: 'Robótica Avanzada',
      subtitle: 'NVIDIA impulsa el futuro de los robots humanoides.',
      image: '../../../assets/PDTsodalimon.png',
      buttonText: 'Más Información',
      buttonLink: '#'
    },
    {
      title: 'Inteligencia Artificial',
      subtitle: 'GROOT N1 aporta razonamientos generalizados.',
      image: '../../../assets/PDTsodalimon.png',
      buttonText: 'Explorar',
      buttonLink: '#'
    },
    {
      title: 'Innovación Tecnológica',
      subtitle: 'Transformando la industria con soluciones abiertas.',
      image: '../../../assets/SodaLimonLOGO.jpg',
      buttonText: 'Descubrir',
      buttonLink: '#'
    }
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
    this.setBackground();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  setBackground() {
    const root = document.documentElement;
    root.style.setProperty('--carousel-background', this.backgroundImage ? `url(${this.backgroundImage})` : '#ffffff');
    root.style.setProperty('--background-opacity', this.backgroundOpacity.toString());
  }
}