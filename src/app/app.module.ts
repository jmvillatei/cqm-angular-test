import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloWorld } from './1ercomponente/1er.component';
import { DoComponent } from './do/do.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    DoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
