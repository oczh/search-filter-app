import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { city, perinatSegito } from './type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  array : perinatSegito[] = [];
  private appid = '6c46aa43db7539a6daf11a763626b3d2';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        //console.log(data); 
        this.array = data;
        console.log(this.array)
    });
}

  public getJSON(): Observable<any> {
      return this.http.get("../assets/segitok3.json");
  }

  public city(lat : number, lon : number){
    this.http.get<any>(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=` + this.appid).subscribe({
      next: (v : city[]) => {
        console.log(v);
        console.log(v[0].name)
      },
      error: (e: any) => console.error(e),
      complete: () => console.info('complete'),
    });
  }
  
  public arrShowing(arr : string[]){
    let cap = []
    let word = ""
      for (let i = 0; i < arr.length; i++){
        word = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        cap.push(word)
      }
    console.log(cap.join(" | "))
    return cap.join(" | ")
  }
}
