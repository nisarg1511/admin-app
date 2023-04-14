import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as pages from './pages';
import { RouterModule, Routes } from '@angular/router';
import * as components from './components'
import { ReactiveFormsModule } from '@angular/forms';
import { ProfessionalResolver } from './resolvers/professional.resolver';
const routes: Routes = [
  {
    path: '',
    component: pages.ModulePageComponent,
    children: [
      {
        path: 'category',
        component: pages.ProfessionalsCategoryComponent
      },
      {
        path: 'category/:profession',
        component: pages.ProfessionalListComponent,
        resolve: { professionals: ProfessionalResolver },

      },
      {
        path: 'category/:profession/:professional_id',
        component: pages.ProfessionalProfileComponent,
        resolve: { professionals: ProfessionalResolver },

      }
    ]
  }
]

@NgModule({
  declarations: [
    pages.ProfessionalListComponent,
    pages.ModulePageComponent,
    pages.ProfessionalsCategoryComponent,
    pages.ProfessionalProfileComponent,
    components.ProfessionalSocialMediaComponent,
    components.ProfessionalProfilePictureComponent,
    components.ProfessionalContactDetailsComponent,
    components.ProfessionalProjectItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class ProfessionalsModule { }
