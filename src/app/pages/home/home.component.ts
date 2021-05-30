import { Component, OnDestroy, OnInit } from '@angular/core';
import { CATEGORIES } from './../../shared/database/category.database';
import { ESZKOZOK } from './../../shared/database/eszkoz.database';
import { MatDialog } from '@angular/material/dialog';
import { EszkozAddComponent } from '../eszkoz/add/eszkoz-add.component';
import { FERTOTLENITOK } from 'src/app/shared/database/fertotlenito.database';
import { TbBaseService } from './../../services/tb-base.service';
import { Eszkoz } from './../../shared/models/eszkoz.model';
import { Observable } from 'rxjs';
import { EszkozAddModule } from '../eszkoz/add/eszkoz-add.module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{


  constructor() { }


}
