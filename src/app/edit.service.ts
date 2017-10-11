import { Injectable } from '@angular/core';
import { products } from './products'
// import { Observable } from 'rxjs/Rx';
// import { Jsonp } from '@angular/http';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// const CREATE_ACTION = 'create';
// const UPDATE_ACTION = 'update';
// const REMOVE_ACTION = 'destroy';

@Injectable()
export class EditService {

    private data: any[] = products;

    public products(): any[]{
        return this.data;
    }

    public remove(item: any,index = 0): void {
         index = this.data.findIndex(({ ProductID }) => ProductID ===item.ProductID);
        this.data.splice(index, 1);
      
        
    }

 
}

