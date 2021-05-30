import { Component, Input, OnInit } from '@angular/core';
import { Eszkoz } from './../../../shared/models/eszkoz.model';


@Component({
  selector: 'app-eszkoz-card',
  templateUrl: './eszkoz-card.component.html',
  styleUrls: ['./eszkoz-card.component.scss']
})
export class EszkozCardComponent implements OnInit {
  @Input() eszkoz?: Eszkoz = {} as any;

  constructor() { }

  ngOnInit(): void {
  }

}
