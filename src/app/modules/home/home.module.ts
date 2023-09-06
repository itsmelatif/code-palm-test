import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page.component';
import { CardStepComponent } from 'projects/shortly-lib/src/lib/components/card-step/card-step.component';
import { StatisticListComponent } from './components/statistic-list/statistic-list.component';
import { ShortLinkComponent } from './components/short-link/short-link.component';
import { FormShortComponent } from './components/short-link/form-short/form-short.component';
import { ResultShortComponent } from './components/short-link/result-short/result-short.component';


@NgModule({
  declarations: [
    HomePageComponent,
    StatisticListComponent,
    ShortLinkComponent,
    FormShortComponent,
    ResultShortComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardStepComponent
  ]
})
export class HomeModule { }
