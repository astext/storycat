import { Injectable } from '@angular/core';


export interface Diary {
  id: number ;
  title: string ;
  entry: string ;
  diarytime: string ;
}



@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  diaryNow = new Date();
  diaryTime = new Date().toLocaleTimeString() ;

  diaryDate = this.diaryNow.getFullYear() + '-' + (this.diaryNow.getMonth() + 1) + '-' + this.diaryNow.getDate() + ': ' + this.diaryTime;
  
 
  diary: Diary[] = [
    {
      id: 1,
      title: "First entry",
      entry: "Bright sunny day. Day after Boxing Day. Relaxed mood, reluctantly being busy. Plants good. ",
      diarytime: this.diaryDate 
    },
    {
      id: 2,
      title: "Second entry",
      entry: "The next entry",
      diarytime: this.diaryDate
      }

  ];


  constructor() { }
}
