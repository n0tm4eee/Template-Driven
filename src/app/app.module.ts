import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Ensure this is imported
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule], // Ensure it's inside imports
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
