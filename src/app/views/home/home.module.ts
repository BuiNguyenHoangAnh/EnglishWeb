import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { TemplatesModule } from './../../templates/templates.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    RouterModule,
    TemplatesModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
