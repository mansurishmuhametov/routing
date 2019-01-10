import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { ManageCrisesComponent } from './components/manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './components/manage-heroes/manage-heroes.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminDashboardComponent,
        AdminComponent,
        ManageCrisesComponent,
        ManageHeroesComponent
    ],
    providers: [],
})
export class AdminModule { }
