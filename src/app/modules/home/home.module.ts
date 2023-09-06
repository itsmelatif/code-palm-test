import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/components/home-page.component';
import { CardStepComponent } from 'projects/shortly-lib/src/lib/components/card-step/card-step.component';


@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardStepComponent
  ]
})
export class HomeModule { }
