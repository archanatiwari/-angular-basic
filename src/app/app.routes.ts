import { NgModule } from '@angular/core';
import {Routes,RouterModule} from "@angular/router";

import {LoginComponent} from "./login/login.component";
import {ContractComponent} from "./contract/contract.component";
import {CreateContractComponent} from "./create-contract/create-contract.component";

const routes:Routes = [
    {
        path: 'contract',
        component:ContractComponent
    },{
        path: 'createContract',
        component:CreateContractComponent
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


