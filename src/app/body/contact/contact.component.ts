import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent  implements OnDestroy{
  constructor(public _contact: ContactService) {}

ngOnDestroy(): void {
    this._contact.handleOnDestroyOfPageResetForm();
}


}
