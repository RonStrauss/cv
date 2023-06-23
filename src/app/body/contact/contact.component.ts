import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnDestroy, AfterViewInit {
  constructor(
    public _contact: ContactService,
    private _change: ChangeDetectorRef
  ) {}

  @ViewChild('email') email!: ElementRef<HTMLInputElement>;

  ngOnDestroy(): void {
    window.scrollTo({top:0})
    this._contact.handleOnDestroyOfPageResetForm();
  }

  ngAfterViewInit(): void {
    if (this.email) {
      this.email.nativeElement.focus();
      this._change.detectChanges();
    }
  }
}
