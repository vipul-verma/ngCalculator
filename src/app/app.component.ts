import { Component } from '@angular/core';

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eqStr = '';
  isClassVisible = true;
  notVisible = false;
  isTrue = true;

  constructor() {  }

  equation(e) {
    const str = e.innerHTML;
    this.eqStr += str;
    console.log(this.eqStr);
  }

  setClassTrue() {
    this.isClassVisible = true;
  }

  setClassFalse() {
    this.isClassVisible = false;
  }

  setDotTrue() {
    this.notVisible = true;
  }

  setDotFalse() {
    this.notVisible = false;
  }

  setMinusFalse() {
    this.isTrue = false;
  }

  clearAll() {
    this.eqStr = '';
    this.isClassVisible = true;
    this.isTrue = true;
  }

}
