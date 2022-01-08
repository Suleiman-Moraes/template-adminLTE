import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeAuthComponent } from './components/home-auth/home-auth.component';

const routes: Routes = [
  {
    path: '', component: HomeAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesAuthRoutingModule { }
