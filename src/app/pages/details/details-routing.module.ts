
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details.component';

const routes: Routes = [
    {
        path: ':dataNameStr/:id',
        component:DetailsComponent,
        data: { title: 'Részletek- Group' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DetailsRoutingModule { }
