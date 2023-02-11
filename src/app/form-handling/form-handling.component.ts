import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-handling',
  templateUrl: './form-handling.component.html',
  styleUrls: ['./form-handling.component.scss']
})
export class FormHandlingComponent implements OnInit {

  person : any = {
    fname: '',
    lname: '',
    country: '',
    subject: '',
  };

  isFormSubmitted = false;

  handleForm(e: any) {
    if (e.target.checkValidity()) {
      e.preventDefault();
      Object.keys(this.person).forEach(i => this.person[i] = e.target[i].value);
      this.isFormSubmitted = true;
    }
  }
  
  handleAnotherReponse() {
    this.isFormSubmitted = false;
    Object.keys(this.person).forEach(i => this.person[i] = '');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
