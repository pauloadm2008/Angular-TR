
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { PastaComponent } from './pasta/pasta.component';
import { ArquivoComponent } from './arquivo/arquivo.component';
import { ComponenteabacaxiComponent } from './componenteabacaxi/componenteabacaxi.component';

@NgModule({
  declarations: [
    AppComponent,
    PastaComponent,
    ArquivoComponent,
    ComponenteabacaxiComponent
  ],
  imports: [
    BrowserModule ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
