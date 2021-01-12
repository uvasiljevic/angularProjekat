import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { transition, style, animate, trigger } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('1s ease-in', style({
    opacity: 1
  }))
]);
const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('1s ease-out', style({
    opacity: 0
  }))
])

const fadeIn = trigger('fadeIn', [
  enterTransition
]);

const fadeOut = trigger('fadeOut', [
  leaveTrans
]);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    fadeIn,
    fadeOut
  ]
})

export class ContactComponent implements OnInit {
  contactForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      firstName : new FormControl("", [Validators.required, Validators.pattern('^[A-ZŽĆČŠĐ][a-zđžćčš]{1,19}$')]),
      lastName : new FormControl("", [Validators.required, Validators.pattern('^[A-ZŠĐČĆŽ][a-zšđčćž]{1,19}$')]),
      email : new FormControl("", [Validators.required, Validators.email]),
      phone : new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      message : new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(300)])
    })
  }
State="";
  onFormSubmit(){
    this.State = "Message sent";
    this.contactForm.reset();
  }

}
