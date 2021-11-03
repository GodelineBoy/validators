import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmailValidator, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    EmailValidator
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
