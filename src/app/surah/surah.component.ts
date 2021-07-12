import { element } from 'protractor';
import { ayahs } from './../models/ayah';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as internal from 'stream';

@Component({
  selector: 'app-surah',
  templateUrl: './surah.component.html',
  styleUrls: ['./surah.component.scss']
})
export class SurahComponent implements OnInit {

  public ayaat:ayahs;
  public allSurah:string = "";
  public index: number = -1;
  public basmalh: string;
  public numberMap:Map<internal,string>
  constructor(private route: ActivatedRoute, private http : HttpClient) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.http.get<ayahs>(`https://api.alquran.cloud/surah/${params['id']}`).subscribe(
        result => result.data.ayahs.forEach(element => {
          
          if(element.numberInSurah == 1){
            this.basmalh = element.text
            if(element.number != 1){
              this.basmalh = element.text.slice(0,38);
              this.allSurah += element.text.slice(39,element.text.length) + " ("+(element.numberInSurah)+") "
            }
          }else{
            this.allSurah += element.text + " ("+(element.numberInSurah)+") "
          }
          this.index += 1;
        })
      )
    });
  }
}
