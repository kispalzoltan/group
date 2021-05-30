import { ContainerModule } from './../../../shared/components/container/container.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EszkozListRoutingModule } from './eszkoz-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EszkozListComponent } from './eszkoz-list.component';
import { EszkozCardModule } from '../card/eszkoz-card.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [EszkozListComponent],
  imports: [
    CommonModule, EszkozListRoutingModule, MatToolbarModule, ContainerModule, EszkozCardModule, MatIconModule, MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class EszkozListModule { }
