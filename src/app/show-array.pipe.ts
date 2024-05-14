import { Pipe, PipeTransform } from '@angular/core';
import { Dula, Gyogykezelesek, Kor, KoraiFejleszto, Mentalis, MozgásIdoszak, MozgásTipus, Szoptatas } from './type';

@Pipe({
  name: 'showArray'
})
export class ShowArrayPipe implements PipeTransform {

  transform(arr : string[] | Array <Dula | Szoptatas | MozgásIdoszak | MozgásTipus | Gyogykezelesek | Kor | Mentalis | KoraiFejleszto> | undefined): string {
    if (arr) {
      let cap = []
      let word = ""
      for (let i = 0; i < arr.length; i++){
        word = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        cap.push(word)
      }
      console.log(cap.join(" | "))
      return cap.join(" | ")
    }
    return ''; 
  }

}
