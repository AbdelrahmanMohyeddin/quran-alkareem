import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexesComponent } from './indexes/indexes.component';
import { HomeComponent } from './home/home.component';
import { SurahComponent } from './surah/surah.component';
import { LayoutComponent } from './reciter/layout.component';
import { AudioPlayerComponent } from './reciter/audio-player/audio-player.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexesComponent,
    HomeComponent,
    SurahComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
