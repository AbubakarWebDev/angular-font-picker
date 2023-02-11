import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-color',
  templateUrl: './font-color.component.html',
  styleUrls: ['./font-color.component.scss']
})
export class FontColorComponent implements OnInit {

  AppTitle = "Angular Font And Color Management Application";
  inputText = "Hello";
  resultClass = "text-center fz-18";
  fontSize = 18;
  color = "blue";

  handleFontSize(event: any) {
    this.fontSize = event.target.value;
  }

  handleInput(event: any) {
    this.inputText = event.target.value;
  }

  handleColor(event: any) {
    this.color = event.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
