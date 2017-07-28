import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { EmployListComponent } from './employ-list/employ-list.component';
import { EmployItemComponent } from './employ-item/employ-item.component';
import { EmployEditComponent } from './employ-edit/employ-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { EmployService } from './employ.service'

@NgModule({
  imports: [
     // Import Official Shared Module
    CommonModule,
    FormsModule,
    // Import Custom Shared Module
    PipesModule,
    DirectivesModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component: EmployListComponent, pathMatch: 'full' },
      { path: 'employ/edit/:sid', component: EmployEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   EmployListComponent,
   EmployItemComponent, 
   EmployEditComponent
   ],
   providers:[EmployService]
})
export class EmployModule { }
