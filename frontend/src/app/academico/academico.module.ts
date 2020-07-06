import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicoRoutingModule } from './academico-routing.module';
import { HomeComponent } from './views/home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AcademicoRoutingModule
  ]
})
export class AcademicoModule { }
