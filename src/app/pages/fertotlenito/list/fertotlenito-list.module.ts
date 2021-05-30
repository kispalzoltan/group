import { ContainerModule } from './../../../shared/components/container/container.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FertotlenitoListRoutingModule } from './fertotlenito-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FertotlenitoListComponent } from './fertotlenito-list.component';
import { FertotlenitoCardModule } from '../card/fertotlenito-card.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [FertotlenitoListComponent],
  imports: [
    CommonModule, FertotlenitoListRoutingModule, MatToolbarModule, ContainerModule, FertotlenitoCardModule,MatProgressSpinnerModule
  ]
})
export class FertotlenitoListModule { }
