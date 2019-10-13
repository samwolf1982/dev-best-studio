import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-card-show',
  templateUrl: './card-show.component.html',
  styleUrls: ['./card-show.component.sass']
})
export class CardShowComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      console.log('IS Platform id ' + this.platformId);
      this.runInit();
    }
  }

  runInit() {
    $(document).ready(() => {
      'use strict';
      const $el = $('#card-ul')
      const sectionFeature = $('#section-feature')
      const baraja = $el.baraja();

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
      $('#feature-prev').on('click', (event) =>  {
        baraja.previous();
      });

      $('#feature-next').on('click', (event) =>  {
        baraja.next();
      });

      // close Features
      $('#feature-close').on('click', (event) =>  {
        baraja.close();
      });
    });

  }


}
