import { Component, Input, OnInit } from '@angular/core';
import { Fertotlenito } from './../../../shared/models/fertotlenito.model';


@Component({
  selector: 'app-fertotlenito-card',
  templateUrl: './fertotlenito-card.component.html',
  styleUrls: ['./fertotlenito-card.component.scss']
})
export class FertotlenitoCardComponent implements OnInit {
  @Input() fertotlenito?: Fertotlenito;

  constructor() { }

  ngOnInit(): void {
  }

}
