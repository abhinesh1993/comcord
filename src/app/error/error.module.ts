import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//Components Import
import { FourNotFourComponent } from './four-not-four/four-not-four.component';

//Router 
const routes: Routes = [
    { path: '/404', component: FourNotFourComponent }
];

@NgModule({
  declarations: [FourNotFourComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes)
  ]
})
export class ErrorModule { }
