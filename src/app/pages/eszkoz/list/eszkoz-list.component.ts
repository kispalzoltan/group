import { Router } from '@angular/router';
import { Eszkoz } from './../../../shared/models/eszkoz.model';
import { TbBaseService } from './../../../services/tb-base.service';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EszkozAddComponent } from '../add/eszkoz-add.component';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-eszkoz-list',
  templateUrl: './eszkoz-list.component.html',
  styleUrls: ['./eszkoz-list.component.scss']
})
export class EszkozListComponent implements OnInit {
  title = 'Eszközök';
  list: Observable<Eszkoz[]> | null = null;
  errorObject: null;

  constructor(private service: TbBaseService<Eszkoz>, private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.errorObject = null;
    this.list = this.service.get('eszkozok').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EszkozAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((eszkoz: Eszkoz) => {
      console.log(eszkoz);
      if (eszkoz) {
        this.service.add('eszkozok', eszkoz);
      }
    }, err => {
      console.warn(err);
    });
  }

}
