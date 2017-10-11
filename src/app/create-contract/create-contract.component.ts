import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'app-create-contract',
  	templateUrl: './create-contract.component.html',
  	styleUrls: ['./create-contract.component.scss']
})
export class CreateContractComponent implements OnInit {

	public QuestionSet: Array<string> = ["CONS - Responsive repairs & planned maintenance"];
	public ListName: Array<string> = ["2014A - Catchup Servicing - 99", "AGASS - Annual gas service north view - 1"];
	public InvoiceType: Array<string> = [
		"One invoice one job", 
		"One invoice many jobs",
		"One certificate many jobs", 
		"No invoice or certificate"
	];
	public StatusCode: Array<string> = [
		"DEAD - Dead", 
		"LIVE - Live",
		"SUPS - Suspended"
	];

	public Owner: Array<string> = [
		"Shared", 
		"Client",
		"Contractor"
	];

	public Origin: Array<string> = [
		"MOBC - Open mobile"
	];

	public isChecked: boolean = false;
	public checked: boolean = false;

  	constructor() { }

  	ngOnInit() {
  	}

  	public opened = false;

	public close(status) {
	  this.opened = false;
	}

	public open() {
	  this.opened = true;
	}

}
