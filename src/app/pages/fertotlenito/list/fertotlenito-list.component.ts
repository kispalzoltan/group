import { Router } from '@angular/router';
import {Fertotlenito } from './../../../shared/models/fertotlenito.model';
import { TbBaseService } from './../../../services/tb-base.service';
import { Component, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fertotlenito-list',
  templateUrl: './fertotlenito-list.component.html',
  styleUrls: ['./fertotlenito-list.component.scss']
})
export class FertotlenitoListComponent  {
  title = 'Fertőtlenítők';
  list: Observable<Fertotlenito[]> | null = null;

  constructor(private service: TbBaseService<Fertotlenito>, private router: Router) { }


  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.get();
  }




  get(): void {
    this.list = this.service.get('fertotlenitok');
  }

}
