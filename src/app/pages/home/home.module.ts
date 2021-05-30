import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SplashScreenModule } from '../splash-screen/splash-screen.module';
import { EszkozCardModule } from '../eszkoz/card/eszkoz-card.module';
import { FormsModule } from '@angular/forms';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { FertotlenitoCardModule } from '../fertotlenito/card/fertotlenito-card.module';
import { NavModule } from '../nav/nav.module';
import { LoginModule } from '../login/login.module';
import { RegistrationModule } from '../registration/registration.module';
import { KotszerCardModule } from '../kotszer/card/kotszer-card.module';
import { DetailsModule } from '../details/details.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { EszkozAddModule } from '../eszkoz/add/eszkoz-add.module';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule, CommonModule, SplashScreenModule, EszkozCardModule, FormsModule, OnHoverModule,MatButtonModule,MatIconModule,
    FertotlenitoCardModule, NavModule, LoginModule, RegistrationModule, KotszerCardModule,DetailsModule, MatDialogModule, EszkozAddModule

  ],
  exports: [HomeComponent]
})
export class HomeModule { }
