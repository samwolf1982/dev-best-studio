import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-card-show',
  templateUrl: './card-show.component.html',
  styleUrls: ['./card-show.component.sass']
})
export class CardShowComponent implements OnInit, AfterViewInit {

  public data = [];


  constructor(@Inject(PLATFORM_ID) private platformId: object) {
  }


  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.runInit();
    }
  }

  ngOnInit() {
    this.data = this.fillData();
  }


  runInit() {
    $(document).ready(() => {
      'use strict';
      const $el = $('#card-ul')
      const sectionFeature = $('#section-feature')
      const baraja = $el.baraja();

      console.log(baraja)
      if ($(window).width() > 480) {
        sectionFeature.appear(() => {
          baraja.fan({
            speed: 1500,
            easing: 'ease-out',
            range: 100,
            direction: 'right',
            origin: {x: 50, y: 200},
            center: true
          });
        });
        $('#feature-expand').click(() => {
          baraja.fan({
            speed: 500,
            easing: 'ease-out',
            range: 100,
            direction: 'right',
            origin: {x: 50, y: 200},
            center: true
          });
        });
      } else {
        sectionFeature.appear(() => {
          baraja.fan({
            speed: 1500,
            easing: 'ease-out',
            range: 80,
            direction: 'left',
            origin: {x: 200, y: 50},
            center: true
          });
        });
        $('#feature-expand').click(() => {
          baraja.fan({
            speed: 500,
            easing: 'ease-out',
            range: 80,
            direction: 'left',
            origin: {x: 200, y: 50},
            center: true
          });
        });
      }

      // Feature navigation
      $('#feature-prev').on('click', (event) => {
        baraja.previous();
      });

      $('#feature-next').on('click', (event) => {
        baraja.next();
      });

      // close Features
      $('#feature-close').on('click', (event) => {
        baraja.close();
      });
    });

  }

  fillData() {


    return [
      {
        header: 'English Film',
        text: 'Платформа для изучения английского языка',
        img: '/assets/images/cards/e-film.png',
        url: 'https://english-films.com'
      },
      {
        header: 'Доминанта',
        text: 'Агентство недвижимости  Одесса',
        img: '/assets/images/cards/dominanta.jpg',
        url: 'https://dominanta-d.com/catalog'
      },
      {
        header: 'Antinumus',
        text: 'Антикварный магазин Antinumus',
        img: '/assets/images/cards/antinumus.jpg',
        url: 'https://antinumus.com/'
      },
      {
        header: 'AdborLutck',
        text: 'Магазин брендовых детских товаров Луцк',
        img: '/assets/images/cards/adbor.png',
        url: 'https://adbor-lutsk.com.ua'
      },
      {
        header: 'Babooshka',
        text: 'Быстрая дотавка домашней еды на дом',
        img: '/assets/images/cards/babush2.png',
        url: 'https://www.babooshka.com.ua/'
      },
      {
        header: 'LookMyBets',
        text: 'Социальная сеть для капперов (спортивный аналитик)',
        img: '/assets/images/cards/look.jpg',
        url: 'https://main.lookmybets.com/bet'
      },
      {
        header: 'Eklektik',
        text: 'Дизайнерская студия, мастерская идей',
        img: '/assets/images/cards/ekle.png',
        url: 'https://eklektikstore.com.ua'
      },
    ];
  }

  openTab(e: number) {
    window.open(this.data[e].url, '_blank');
  }
}
