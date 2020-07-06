import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmeRoutingModule } from './filme-routing.module';
import { HomeComponent } from './views/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FilmeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class FilmeModule { }
