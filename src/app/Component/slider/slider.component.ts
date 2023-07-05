import { Component, OnInit, AfterContentChecked, ViewChild, ViewEncapsulation } from '@angular/core';
import { Autoplay, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import Swiper, {Pagination, Navigation} from 'swiper';

// install Swiper modules
Swiper.use([Navigation]);
Swiper.use([Pagination]);
Swiper.use([Autoplay]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {

  @ViewChild('swiper') swiper:SwiperComponent | undefined;

  config: SwiperOptions ={
    spaceBetween: 50,
    pagination: true,
    slidesPerView: 'auto',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
