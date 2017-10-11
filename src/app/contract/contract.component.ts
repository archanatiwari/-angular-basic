import { Component, OnInit, Inject } from '@angular/core';
import { products } from '../products';
import { Observable } from 'rxjs/Rx';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { State, process } from '@progress/kendo-data-query';

import { Product } from '../app.model';
//import { EditService } from '../edit.service';

import {
GridDataResult, PageChangeEvent
  // DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})

export class ContractComponent implements OnInit {
  private gridData: GridDataResult;
  private items: any[] = products;
  
  private pageSize: number = 10;
  private skip: number = 0;
  
  constructor() {
    this.loadItems();
  }

  protected pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
    }


    private loadItems(): void {
      this.gridData = {
          data: this.items.slice(this.skip, this.skip + this.pageSize),
          total: this.items.length
      };
  }

  public remove(item: any,index = 0): void {
     index = this.items.findIndex(({ ProductID }) => ProductID ===item.ProductID);
    this.items.splice(index, 1);
    this.loadItems();     
    
}

  public removeHandler({ dataItem }): void {
       this.remove(dataItem);
  }

  public products(): any[]{
    return this.items;
}

  public ngOnInit() {
    this.items = this.products();
  }


}

