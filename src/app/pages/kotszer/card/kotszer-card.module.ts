import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KotszerCardComponent } from './kotszer-card.component';



@NgModule({
  declarations: [KotszerCardComponent],
  imports: [
    CommonModule
  ],
  exports: [KotszerCardComponent]
})
export class KotszerCardModule { }
