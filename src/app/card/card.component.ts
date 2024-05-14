import { Component, Input } from '@angular/core';
import { perinatSegito } from '../type';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() segito = {} as perinatSegito;
  //kompShowing : String
  
  constructor(public service: RequestService){
  }

  //kompShowing = this.service.arrShowing(this.segito.kompetenciak)
  

}
//margin