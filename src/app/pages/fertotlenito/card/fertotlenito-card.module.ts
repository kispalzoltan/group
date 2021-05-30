import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FertotlenitoCardComponent } from './fertotlenito-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [FertotlenitoCardComponent],
  imports: [
    CommonModule, MatCardModule, MatButtonModule, MatIconModule
  ],
  exports: [FertotlenitoCardComponent]
})
export class FertotlenitoCardModule { }
