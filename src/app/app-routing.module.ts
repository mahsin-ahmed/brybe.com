import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationformComponent } from './inputs/registrationform/registrationform.component';


//Routing declaration here

const routes:Routes = [
  {
    path:'registration',
    component:RegistrationformComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
