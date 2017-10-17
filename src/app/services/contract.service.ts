import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { Contract } from '../modal/contract';

@Injectable()
export class ContractService {

  //URL for CRUD operations
  contractUrl = "http://localhost:3000/contracts";
  
  //Create constructor to get Http instance
  constructor(private http: Http) {}
  //Fetch all contracts
  getAllContracts(): Observable < Contract[] > {
    return this.http.get(this.contractUrl)
      .map(this.extractData)
      .catch(this.handleError);

  }
  //Create contract
  createContract(contract: Contract): Observable < number > {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.contractUrl, contract, options)
      .map(success => success.status)
      .catch(this.handleError);
  }
  //Fetch contract by id
  getContractById(contractId: string): Observable < Contract > {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    console.log(this.contractUrl + "/" + contractId);
    return this.http.get(this.contractUrl + "/" + contractId)
      .map(this.extractData)
      .catch(this.handleError);
  }
  //Update contract
  updateContract(contract: Contract): Observable < number > {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.put(this.contractUrl + "/" + contract.id, contract, options)
      .map(success => success.status)
      .catch(this.handleError);
  }
  //Delete contract	
  deleteContractById(contractId: string): Observable < number > {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.delete(this.contractUrl + "/" + contractId)
      .map(success => success.status)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }


}
