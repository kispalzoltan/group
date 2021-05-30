import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-eszkoz-add',
  templateUrl: './eszkoz-add.component.html',
  styleUrls: ['./eszkoz-add.component.scss']
})
export class EszkozAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    identifier: new FormArray([
      new FormGroup({
          use: new FormControl(),
          value: new FormControl()
    }),]),
    active: new FormControl(true),
    type: new FormControl(''),
    actual:new FormControl(true),
    code: new FormArray([
      new FormGroup({
          title: new FormControl(),
          creation: new FormControl()
    }),]),
    name: new FormControl(''),
    quantity: new FormControl(''),
    title: new FormControl(''),

  });


  constructor(public dialogRef: MatDialogRef<EszkozAddComponent>) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("init");
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("masikinit");
  }




}
