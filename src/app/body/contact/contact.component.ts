import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private _fb: FormBuilder) {}

  contactForm = this._fb.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    phone: ['', [Validators.required, Validators.pattern(/\d/)]],
  });
}
