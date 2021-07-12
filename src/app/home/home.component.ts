import { all_reciters, reciters } from './../models/reciters';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public reciters_list:reciters[];
  public all_reciters_list:all_reciters[];

  public language:number = 0;
  public url:string[] = ["https://api.mp3quran.net/verse/verse_ar.json","https://api.mp3quran.net/verse/verse_en.json"]

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
    // this.http.get<any>(`${this.url[this.language]}`).subscribe(
    //   result => this.reciters_list = result.reciters_verse
    // );

    this.http.get<any>("https://mp3quran.net/api/_arabic.php").subscribe(
      result => this.all_reciters_list = result.reciters
    )
    
  }

}
