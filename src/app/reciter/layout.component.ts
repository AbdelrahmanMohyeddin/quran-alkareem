import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { surah } from '../models/surah';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public server:string;
  public surahStr:string;
  public surahs:surah;
  public listOfSuras:string[] = new Array(114)
  public surah:Array<string> = new Array(114);
  public surahNum:number;
  public surahMap = new Map();
  public src:string;
  
  constructor(private route:ActivatedRoute, private http:HttpClient) { 
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {this.server = params.id; this.surahStr = params.page});
    this.surah = this.surahStr.split(",");

    
    this.http.get<surah>("https://api.alquran.cloud/surah").subscribe(
      result => {
        let i = 0;
        result.data.forEach(e => this.listOfSuras[i++] = (e.name))
        for(let i = 1 ; i <= 114;i++){
          let x:Number = (Math.log10(i) + 1) | 0; 
          let y:string = (x == 1?"00"+i:(x == 2?"0"+i:i)).toString()+".mp3"
          this.surahMap.set( y , this.listOfSuras[i-1]);
        }
      }
    );

    for(let i = 0 ; i < this.surah.length;i++){
      this.surah[i] = (this.surah[i].length == 1?"00"+this.surah[i]:(this.surah[i].length == 2?"0"+this.surah[i]:this.surah[i])) + ".mp3";
    }
    this.src = this.server + "/" + this.surah[0];
  }


  display(selected_surah:string){
    this.src = this.server + "/" + selected_surah;
    //console.log(this.src);
    // var audio = document.getElementsByTagName('audio');
    // audio[0].play();
  }

  

}
