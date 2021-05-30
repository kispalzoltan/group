import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemFormComponent } from './item-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { ItemFormRoutingModule } from './item--formrouting.module';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';




@NgModule({
  declarations: [
    ItemFormComponent
  ],
  imports: [
    CommonModule,
    ItemFormRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule, MatInputModule, ReactiveFormsModule,
    ContainerModule,
    MatListModule,
    MatRadioModule,
    MatDatepickerModule,

  ]
})
export class ItemFormModule { }
