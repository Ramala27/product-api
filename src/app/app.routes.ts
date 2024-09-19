import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductViweComponent } from './product/product-viwe/product-viwe.component';
import { ProductAddComponent } from './product/product-add/product-add.component';

export const routes: Routes = [

    {path:'home', component:HomeComponent},
    {path:'products', component:ProductListComponent},
    {path:'viewproduct/:id', component:ProductViweComponent},
    {path:'product/add', component:ProductAddComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}

];
