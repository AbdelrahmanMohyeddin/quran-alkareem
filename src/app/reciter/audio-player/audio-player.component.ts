import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
  public src:string;
  constructor(private route:ActivatedRoute) {
  }

  ngOnInit(): void {
     this.route.params.subscribe(params => {
       this.changeSrc(params.idx + "/" + params.pagex)
      })
  }

  changeSrc(source:string){
    let p = document.getElementsByTagName('audio')[0];
    p.pause();
    p.src = source;
    p.play();
  }

}
