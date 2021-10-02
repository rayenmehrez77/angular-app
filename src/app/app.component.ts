import { Component } from '@angular/core';

interface LoggerItem {
  text:string;
  bgColor:string;
  textColor:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter = 0;
  clickLogger:LoggerItem[] = [];
  isShown = true;

  onShow(){
    this.isShown = !this.isShown;
    this.clickLogger.push({
      text:"Button Clicked "+ (++this.counter) + " times.",
      bgColor: this.counter >= 5 ?'green' : 'white',
      textColor: this.counter >= 5 ? 'whiteText' : 'blackText'
    })
  }
}