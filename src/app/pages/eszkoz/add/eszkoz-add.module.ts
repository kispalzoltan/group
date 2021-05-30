import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EszkozAddComponent } from './eszkoz-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

import { MatDatepickerModule } from '@angular/material/datepicker';





@NgModule({
  declarations: [
    EszkozAddComponent
  ],
  imports: [
    CommonModule, FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatCardModule,
    
  ],
  exports: [EszkozAddComponent]
})
export class EszkozAddModule { }
