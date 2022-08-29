import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './logo/logo.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LogoComponent,
    MenubarComponent,
    SearchboxComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LogoComponent,
    MenubarComponent,
    SearchboxComponent,
    LoginComponent
  ]
})
export class HeaderModule { }
