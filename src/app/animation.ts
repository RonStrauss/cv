import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition(
    'AboutPage => EducationPage, EducationPage => ExperiencePage, ExperiencePage => ContactPage, ContactPage => AboutPage, AboutPage => ExperiencePage, EducationPage =>  ContactPage',
    [
      style({ maxHeight: '100vh'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top:0,
          right:0,
          width:'100%',
          height:'100%',
          overflow: 'hidden',
        }),
      ]),
      query(':enter', [style({ right: '-100%'})]),
      query(':leave', animateChild()),
      group([
        query(':leave', [animate('400ms ease-out', style({ right: '100%' }))]),
        query(':enter', [animate('400ms ease-out', style({ right: '0%' }))]),
      ]),
    ]
  ),
  transition(
    'EducationPage =>  AboutPage, ExperiencePage =>  EducationPage, ContactPage =>  ExperiencePage, AboutPage => ContactPage, ExperiencePage =>  AboutPage, ContactPage =>  EducationPage',
    [
      style({ maxHeight: '100vh'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top:0,
          left:0,
          width: '100%',
          height:'100%',
          overflow: 'hidden',
        }),
      ]),
      query(':enter', [style({ left: '-100%' })]),
      query(':leave', animateChild()),
      group([
        query(':leave', [animate('400ms ease-out', style({ left: '100%' }))]),
        query(':enter', [animate('400ms ease-out', style({ left: '0%' }))]),
      ]),
    ]
  ),
]);
