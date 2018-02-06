import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { setTimeout } from 'timers';

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('testAnimation', [
      state('inactive', style({
        backgroundColor: 'rgb(255, 216, 0)',
        color: '#000'
      })),
      state('active', style({
        backgroundColor: 'rgba(0,0,0,0.9)'
      })),
      transition('active => inactive', animate('0.5s linear')),
      transition('inactive => active', animate('0.5s linear'))
    ])
  ]
})
export class AppComponent {
  eqStr = '';
  ans: any = '';
  output = '';
  isClassVisible = true;
  notVisible = false;
  isTrue = true;
  allowCalculation = false;
  active = true;
  setNumber = false;
  

  constructor() {}

  get statename() {
    return this.active ? 'active' : 'inactive'
  }

  toggleActive() {
    return new Promise(resolve => {
      setTimeout(()=>{
        this.active = true;  
      },500)
      this.active = false; 
    })    
  }

  equation(e) {
    const str = e.innerHTML;
    this.eqStr += str;
    console.log(this.eqStr);
  }

  solveEquation() {
    this.ans = eval(this.eqStr);
    // this.eqStr = eval(this.eqStr);
  }

  brakets() {
    this.eqStr = "(" + this.eqStr + ")";
    this.allowCalculation = true;
    this.setNumber = true;
  }

  setCalculationFalse() {
    this.allowCalculation = false;
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

  setMinusTrue() {
    this.isTrue = true;
  }

  setNumberFalse() {
    this.setNumber = false;
  }

  clearAll() {
    this.eqStr = '';
    this.ans = '';
    this.isClassVisible = true;
    this.isTrue = true;
  }

  clearLast() {
    this.eqStr = this.eqStr.substring(0, this.eqStr.length - 1);

    if(this.eqStr.length < 1) {
      this.isClassVisible = true;
    } else {
      this.isClassVisible = false;
    }
  }

}
