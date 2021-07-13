import { reciters } from './../models/reciters';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  public recitersSubject : BehaviorSubject<reciters>;
  public reciters : Observable<reciters>;
  constructor() { 
    this.recitersSubject = new BehaviorSubject<reciters>(new reciters);
    this.reciters = this.recitersSubject.asObservable();
  }

  public recitersValues():reciters{
    return this.recitersSubject.value;
  }

  
}
