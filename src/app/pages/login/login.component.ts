import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.required])
  });
  @Output() callSelectPage = new EventEmitter<string>();

  @HostListener('window:keydown.enter', ['$event'])
  handleKeyDown(ecent: KeyboardEvent){
    this.callSelectPage.emit('home');
  }

  constructor(private router: Router) {}

  navTo(url: string): void{
    this.router.navigateByUrl(url);
  }
  login(): void{
    this.navTo('/home');
  }

}
