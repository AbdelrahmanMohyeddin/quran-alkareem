import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { surah } from '../models/surah';

@Component({
  selector: 'app-indexes',
  templateUrl: './indexes.component.html',
  styleUrls: ['./indexes.component.scss']
})
export class IndexesComponent implements OnInit {

  public surahs:surah;

  constructor( private http:HttpClient ) {}
  
  ngOnInit() {
    this.http.get<surah>("https://api.alquran.cloud/surah").subscribe(
      result =>  this.surahs = result
    );
  }

}
