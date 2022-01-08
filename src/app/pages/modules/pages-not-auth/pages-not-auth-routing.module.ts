import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeNotAuthComponent } from './components/home-not-auth/home-not-auth.component';

const routes: Routes = [
  {
    path: '', component: HomeNotAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesNotAuthRoutingModule { }
