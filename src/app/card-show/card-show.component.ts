import {Component, Inject, AfterViewInit, OnInit, PLATFORM_ID} from '@angular/core';
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
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
        img: '/assets/images/cards/e-film.png'
      },
      {
        header: 'English Film2',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
        img: '/assets/images/cards/2.jpg'
      },
      {
        header: 'English Film3',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa ',
        img: '/assets/images/cards/3.jpg'
      },
      {
        header: 'English Film3',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa ',
        img: '/assets/images/cards/3.jpg'
      },
      {
        header: 'English Film3',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa ',
        img: '/assets/images/cards/3.jpg'
      },
      {
        header: 'English Film3',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa ',
        img: '/assets/images/cards/3.jpg'
      },
      {
        header: 'English Film',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa ',
        img: '/assets/images/cards/3.jpg'
      },
    ];
  }
}
