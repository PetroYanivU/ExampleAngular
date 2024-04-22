import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from "@angular/router";
import {MessagComponent} from "./messag.component";


const routes: Routes = [
  {
    path: '', component:  MessagComponent ,

  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    [RouterModule.forChild(routes)],

],
  exports: [RouterModule]

})
export class MessagModule { }
