import { Injectable } from '@angular/core';
import { products } from '../modal/products'

@Injectable()
export class EditService {

    private data: any[] = products;

    public products(): any[]{
        return this.data;
    }
    
    constructor() { }

    public remove(item: any,index = 0): void {
         index = this.data.findIndex(({ ProductID }) => ProductID ===item.ProductID);
        this.data.splice(index, 1);
      
        
    }

 
}