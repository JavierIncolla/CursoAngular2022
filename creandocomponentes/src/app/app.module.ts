import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content/content.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header/header.component';
import { MenuComponent } from './components/menu/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
