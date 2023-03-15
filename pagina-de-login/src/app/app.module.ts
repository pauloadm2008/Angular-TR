import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginContainerComponent } from './login/login-container/login-container.component';
import { LoginComponent } from './login/login.component';
import { LoginTitleComponent } from './login/login-container/login-title/login-title.component';
import { LoginInputComponent } from './components/login-input/login-input.component';
import { ListaComponent } from './lista/lista.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginContainerComponent,
    LoginComponent,
    LoginTitleComponent,
    LoginInputComponent,
    ListaComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
