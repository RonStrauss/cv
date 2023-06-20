import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { BodyRoutingModule } from './body-routing.module';

@NgModule({
  declarations: [
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  imports: [CommonModule, BodyRoutingModule],
})
export class BodyModule {}
