import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SimpleBookMarkComponent } from './simple-book-mark/simple-book-mark.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleBookMarkComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
