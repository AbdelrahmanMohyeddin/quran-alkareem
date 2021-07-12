import { SurahComponent } from './surah/surah.component';
import { HomeComponent } from './home/home.component';
import { IndexesComponent } from './indexes/indexes.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const reciterModule = () => import('./reciter/reciter.module').then(x => x.ReciterModule);

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'index',component:IndexesComponent},
  {path:'home',component:HomeComponent},
  {path:'reciter/:id/:page',loadChildren:reciterModule},
  {path:'surah/:id',component:SurahComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
