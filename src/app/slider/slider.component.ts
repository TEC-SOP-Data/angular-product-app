import { Component, AfterViewInit, HostListener } from '@angular/core';
import { Carousel } from 'bootstrap'
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements AfterViewInit {
  carousel: any;

  ngAfterViewInit(): void {
    this.restartCarousel();
  }
  restartCarousel() {
    const carouselElement = document.getElementById('carouselExample');
    if (carouselElement) {
      this.carousel = new Carousel(carouselElement, { interval: 10000, ride: 'carousel', pause: false });
    }
  }

}

