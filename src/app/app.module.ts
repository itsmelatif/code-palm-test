import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from 'projects/shortly-lib/src/lib/layouts/main/main.component';
import { CardComponent } from 'projects/shortly-lib/src/lib/components/card/card.component';
import { ButtonComponent } from 'projects/shortly-lib/src/lib/components/button/button.component';
import { CardStepComponent } from 'projects/shortly-lib/src/lib/components/card-step/card-step.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
