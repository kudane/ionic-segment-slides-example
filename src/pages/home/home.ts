import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('element') element: ElementRef;

  constructor(public navCtrl: NavController, public platform: Platform) {
  }

  pan(event) {
    const plus = 20; //ความเร็วขณะเลื่อน
    let scroll = this.element.nativeElement.scrollLeft; //ใช้เพื่อเช็ค

    if (event.direction === 4) {//ซ้าย <<< ขวา
      if (scroll > 0) { //scroll > 0 เท่านั้น
        this.element.nativeElement.scrollLeft -= plus;
      }
    } else if (event.direction === 2) { //ขวา >>> ซ้าย
      this.element.nativeElement.scrollLeft += plus;
    }
  }
}
