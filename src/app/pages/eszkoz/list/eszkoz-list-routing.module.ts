import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EszkozListComponent } from './eszkoz-list.component';

const routes: Routes = [
    {
        path: '',
        component: EszkozListComponent,
        data: { title: 'Eszközök - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EszkozListRoutingModule { }
