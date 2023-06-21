import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private _fb: FormBuilder) {}

  alphabeticRegex = () => new RegExp(/^[\D\w]+$/  , 'u')

  contactForm = this._fb.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    firstName: ['', [Validators.required, Validators.pattern(this.alphabeticRegex())]],
    lastName: ['', [Validators.required, Validators.pattern(this.alphabeticRegex())]],
    phone: ['', [Validators.required, Validators.pattern(/\d/)]],
  });
}
