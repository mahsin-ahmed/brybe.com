import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { LoginformComponent } from './loginform/loginform.component';



@NgModule({
  declarations: [
    RegistrationformComponent,
    LoginformComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RegistrationformComponent,
    LoginformComponent
  ]
})
export class InputsModule { }
