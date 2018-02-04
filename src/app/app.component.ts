import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  eqStr = '';
  isClassVisible = false;
  constructor(private elRef: ElementRef) {  }

  ngAfterViewInit() {
    const elem = this.elRef.nativeElement.querySelector('.math-button');
    console.log(elem);

  }

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

}
