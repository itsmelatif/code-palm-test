import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MainComponent } from 'projects/shortly-lib/src/lib/layouts/main/main.component';
import { CardComponent } from 'projects/shortly-lib/src/lib/components/card/card.component';
import { ButtonComponent } from 'projects/shortly-lib/src/lib/components/button/button.component';
import { CardStepComponent } from 'projects/shortly-lib/src/lib/components/card-step/card-step.component';
import { CoreInterceptor } from './cores/interceptors/core.interceptor';

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CoreInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
