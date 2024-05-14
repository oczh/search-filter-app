import { Component } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  constructor(public service: RequestService){
  }
}
