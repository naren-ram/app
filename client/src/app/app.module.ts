// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EducationFormComponent } from './education-form/education-form.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AppComponent, EducationFormComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
