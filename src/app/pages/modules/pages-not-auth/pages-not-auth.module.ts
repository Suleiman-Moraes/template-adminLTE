import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TemplateModule } from '../template/template.module';
import { HomeNotAuthComponent } from './components/home-not-auth/home-not-auth.component';
import { PagesNotAuthRoutingModule } from './pages-not-auth-routing.module';

@NgModule({
  declarations: [
    HomeNotAuthComponent
  ],
  imports: [
    CommonModule,
    PagesNotAuthRoutingModule,
    TemplateModule
  ]
})
export class PagesNotAuthModule { }
