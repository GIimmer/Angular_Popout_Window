import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list'; 
import { MatButtonModule } from '@angular/material/button'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ClockComponent } from './clock/clock.component';
import { TextDemoComponent } from './text-demo/text-demo.component';
import { RandomColorGeneratorComponent } from './random-color-generator/random-color-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ClockComponent,
    TextDemoComponent,
    RandomColorGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
