import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import { Autoplay, SwiperOptions } from 'swiper';

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortadaComponent implements OnInit {

  @ViewChild('swiper') swiper:SwiperComponent | undefined;

  config: SwiperOptions ={
    spaceBetween: 50,
    pagination: true,
    slidesPerView: 'auto',
  };

  constructor() { }

  ngOnInit(): void {
    if(this.swiper){
      this.swiper.updateSwiper
    };
  }

}
