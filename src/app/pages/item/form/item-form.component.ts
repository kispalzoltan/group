import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { getGroupForm } from 'src/app/shared/forms/group.form';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  form: FormGroup | null = null;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.form = getGroupForm();
    this.log();
    const idFormArray = this.form.get('identifier') as FormArray;
    console.log(idFormArray as FormArray);
  }

  log(): void{
    console.log(this.form?.value);
  }

}
