import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnchorComponent } from './anchor/anchor.component';


export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion)").matches;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AnchorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule.withConfig({
      disableAnimations: prefersReducedMotion()
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
