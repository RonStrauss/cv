import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, delay, map, startWith, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  isFormSubmittedSuccessfully$ = new BehaviorSubject<boolean>(false);

  isRequestSuccessfullySent$ = this.isFormSubmittedSuccessfully$.pipe(delay(3000))

  constructor(private _fb: FormBuilder) {}

  contactForm = this._fb.nonNullable.group({
    email: [<string>'', [Validators.email, Validators.required]],
    firstName: [<string>'', [Validators.required, Validators.pattern(/^[\p{L}\s]+$/u)]],
    lastName: [<string>'', [Validators.required, Validators.pattern(/^[\p{L}\s]+$/u)]],
    phone: [<string>'', [Validators.required, Validators.pattern(/^[\d/]+$/)]],
  });

  handleContactFormSubmitted():void{
    if (this.contactForm.invalid || this.isFormSubmittedSuccessfully$.value) return
    this.isFormSubmittedSuccessfully$.next(true)
    
  }

  handleOnDestroyOfPageResetForm(){
    this.isFormSubmittedSuccessfully$.next(false);
    this.contactForm.reset();
  }
}
