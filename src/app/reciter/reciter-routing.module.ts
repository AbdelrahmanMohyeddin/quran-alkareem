import { LayoutComponent } from './layout.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
    {path:'',component:LayoutComponent,children:[
    {path:'audio/:idx/:pagex',component:AudioPlayerComponent}
    ]}
    // {path:'audio',component:AudioPlayerComponent}
];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class reciterRoutingModule { }