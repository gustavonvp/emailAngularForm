import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';


const routes: Routes = [
  {path: '', component: Router}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
