import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FertotlenitoListComponent } from './fertotlenito-list.component';

const routes: Routes = [
    {
        path: '',
        component: FertotlenitoListComponent,
        data: { title: 'Group - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FertotlenitoListRoutingModule { }
