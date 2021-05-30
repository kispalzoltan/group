import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EszkozCardComponent } from './eszkoz-card.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';



@NgModule({
  declarations: [EszkozCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule
  ],
  exports: [EszkozCardComponent]
})
export class EszkozCardModule { }
