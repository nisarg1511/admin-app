import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as pages from './pages'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: pages.ModulePageComponent,
    children: [
      {
        path: 'login',
        component: pages.LoginPageComponent
      },
    ]
  }
]
@NgModule({
  declarations: [
    pages.ModulePageComponent,
    pages.LoginPageComponent,
    pages.SignupPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
