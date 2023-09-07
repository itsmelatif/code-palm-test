import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page.component';
import { CardStepComponent } from 'projects/shortly-lib/src/lib/components/card-step/card-step.component';
import { StatisticListComponent } from './components/statistic-list/statistic-list.component';
import { ShortLinkComponent } from './components/short-link/short-link.component';
import { FormShortComponent } from './components/short-link/form-short/form-short.component';
import { ResultShortComponent } from './components/short-link/result-short/result-short.component';
import { CardLinkComponent } from 'projects/shortly-lib/src/lib/components/card-link/card-link.component';
import { InputTextComponent } from 'projects/shortly-lib/src/lib/components/input-text/input-text.component';
import { ButtonComponent } from 'projects/shortly-lib/src/lib/components/button/button.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotificationComponent } from 'projects/shortly-lib/src/lib/components/notification/notification.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomePageComponent,
    StatisticListComponent,
    ShortLinkComponent,
    FormShortComponent,
    ResultShortComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardStepComponent,
    CardLinkComponent,
    InputTextComponent,
    ButtonComponent,
    NotificationComponent,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
