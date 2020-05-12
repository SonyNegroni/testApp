import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';


import { SignupService } from './signup.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'testApp'
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private signupService: SignupService
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email],
        this.validateEmailNotTaken.bind(this)
      ]
    });
  }

  validateEmailNotTaken(control: AbstractControl) {
    return this.signupService.checkEmailNotTaken(control.value).pipe(map(res => {
      return res ? null : { emailTaken: true };
    }))
  }
}