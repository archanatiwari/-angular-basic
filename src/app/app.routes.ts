import { NgModule } from '@angular/core';
import {Routes,RouterModule} from "@angular/router";

import {ContractComponent} from "./contract/contract.component";
import {LoginComponent} from "./login/login.component";

const routes:Routes = [
    {
        path: 'contract',
        component:ContractComponent
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: '', 
        redirectTo:'login', 
        pathMatch:'full'
    }

];

@NgModule({
    imports:[
       RouterModule.forRoot(routes)

    ],

    exports: [
        RouterModule
    ],
  declarations: []

})

export class AppRoutingModule{ }


