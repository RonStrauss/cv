import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
// import { BodyComponent } from './body.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'AboutPage' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'ContactPage' },
  },
  {
    path: 'education',
    component: EducationComponent,
    data: { animation: 'EducationPage' },
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    data: { animation: 'ExperiencePage' },
  },
  { path: '**', redirectTo: 'about' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyRoutingModule {}
