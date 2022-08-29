import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SociallinksComponent } from './sociallinks/sociallinks.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { ImportantlinksComponent } from './importantlinks/importantlinks.component';



@NgModule({
  declarations: [
    SociallinksComponent,
    CompanyprofileComponent,
    ImportantlinksComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SociallinksComponent,
    CompanyprofileComponent,
    ImportantlinksComponent
  ]
})
export class FooterModule { }
