import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemFormComponent} from './item-form.component';


const routes: Routes = [
    {
        path: '',
        component: ItemFormComponent,
        data: { title: 'Item - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ItemFormRoutingModule { }
