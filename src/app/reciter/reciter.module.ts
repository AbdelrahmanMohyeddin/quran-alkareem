import { LayoutComponent } from './layout.component';
import { reciterRoutingModule } from './reciter-routing.module';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AudioPlayerComponent
  ],
  imports: [
    CommonModule,
    reciterRoutingModule
  ]
})
export class ReciterModule { }
