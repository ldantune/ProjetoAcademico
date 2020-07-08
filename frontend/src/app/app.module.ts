import { AcademicoModule } from './academico/academico.module';
import { FilmeModule } from './filme/filme.module';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    // FilmeModule,
    // AcademicoModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
