import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as pages from './pages'
const routes: Routes = [
    {
        path: '',
        component: pages.ModulePageComponent,
        children: [
            {
                path: '',
                component: pages.DashboardComponent
            }
        ]
    }
]
@NgModule({
    declarations: [
        pages.DashboardComponent,
        pages.ModulePageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule
    ]
})
export class DashboardModule { }
