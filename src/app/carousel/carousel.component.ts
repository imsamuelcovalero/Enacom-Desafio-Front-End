/* File: src/app/carousel/carousel.component.ts */
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IProject } from '../interfaces/project.interface';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  @Input()
  projects: IProject[] = [];

  carouselOptions: OwlOptions = {
    loop: true,
    margin: 20,
    nav: true,
    items: 1,
    touchDrag: false, // desativa o arrastar ao tocar na tela
    navText: ['Anterior', 'Próximo'],
    navSpeed: 700, // ajusta a velocidade de transição
    dotsSpeed: 700, // ajusta a velocidade das bolinhas de navegação
  };

  private resizeSubscription: Subscription = new Subscription;

  ngOnInit(): void {
    this.resizeSubscription = fromEvent(window, 'resize')
      .pipe(
        debounceTime(500) // espera 500ms para evitar muitas chamadas durante o redimensionamento
      )
      .subscribe(() => this.refreshCarousel());
  }

  ngOnDestroy(): void {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

  private refreshCarousel(): void {
    // força o recálculo do número de slides visíveis
    this.carouselOptions = { ...this.carouselOptions };
  }
}
