import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ContractService } from '../../services/contract.service';
import { Contract } from '../../modal/contract';

@Component({
  selector: 'contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss']
})

export class ContractFormComponent implements OnInit {



  public value: Date = new Date(2017, 2, 10);
  public value1: Date = new Date(2018, 3, 18);

  public QuestionSet: Array < string > = ["CONS - Responsive repairs & planned maintenance"];

  public ListName: Array < string > = ["2014A - Catchup Servicing - 99", "AGASS - Annual gas service north view - 1"];
  
  public InvoiceType: Array < string > = [
    "One invoice one job",
    "One invoice many jobs",
    "One certificate many jobs",
    "No invoice or certificate"
  ];

  public StatusCode: Array < string > = [
    "DEAD - Dead",
    "LIVE - Live",
    "SUPS - Suspended"
  ];

  public Owner: Array < string > = [
    "Shared",
    "Client",
    "Contractor"
  ];

  public Origin: Array < string > = [
    "MOBC - Open mobile"
  ];

  @Output()
  isOpen = new EventEmitter()

  @Output()
  isClose = new EventEmitter()

  open() {
    this.isOpen.emit();
  }

  close() {
    this.isClose.emit('cancel');
  }

  //Component properties
  allContracts: Contract[];
  statusCode: number;
  requestProcessing = false;
  contractIdToUpdate = null;
  processValidation = false;

   //Create form

    contractForm = new FormGroup({
	    ContractCode: new FormControl('', Validators.required),
	    ContractDescription: new FormControl('', Validators.required),
	    SORTitle: new FormControl('', ),
	    DefaultQuestionSet: new FormControl('', ),
	    InvoiceType: new FormControl('', ),
	    RententionPercentage: new FormControl('', ),
	    ListName: new FormControl('', ),
	    RetentionPeriod: new FormControl('', ),
	    PlannedMaintenance: new FormControl('', ),
	    JobComplete: new FormControl('', ),
	    StatusCode: new FormControl('', ),
	    StartDate: new FormControl('', ),
	    EndDate: new FormControl('', ),
	    Owner: new FormControl('', ),
	    Origin: new FormControl('', ),
	    ChargeType: new FormControl('', )
	});

  //Create constructor to get service instance
  constructor(private contractService: ContractService) {}

  //Create ngOnInit() and and load articles
  ngOnInit(): void {
    this.getAllContracts();
  }

  //Fetch all articles
  getAllContracts() {
    this.contractService.getAllContracts()
      .subscribe(
        data => this.allContracts = data,
        errorCode => this.statusCode = errorCode);
  }

  //Handle create and update contract
  onContractsFormSubmit() {
    this.processValidation = true;
    //Form is valid, now perform create or update
    this.preProcessConfigurations();
    let contract = this.contractForm.value;
    if (this.contractIdToUpdate === null) {

          //Create contract
          this.contractService.createContract(contract)
            .subscribe(successCode => {
                this.statusCode = successCode;
                this.getAllContracts();
                
              },
              errorCode => this.statusCode = errorCode
            );
        // });
    } else {
      //Handle update contract
      contract.id = this.contractIdToUpdate;
      this.contractService.updateContract(contract)
        .subscribe(successCode => {
            this.statusCode = successCode;
            this.getAllContracts();
            // this.backToCreateContract();
          },
          errorCode => this.statusCode = errorCode);
    }
  }

  //Load contract by id to edit
  loadContractToEdit(contractId: string) {
    this.preProcessConfigurations();
    this.contractService.getContractById(contractId)
      .subscribe(contract => {
          this.contractIdToUpdate = contract.id;
          this.contractForm.setValue({
            ContractCode: contract.ContractCode,
            ContractDescription: contract.ContractDescription,
            SORTitle: contract.SORTitle,
            DefaultQuestionSet: contract.DefaultQuestionSet,
            InvoiceType: contract.InvoiceType,
            RententionPercentage: contract.RententionPercentage,
            RetentionPeriod: contract.RetentionPeriod,
            PlannedMaintenance: contract.PlannedMaintenance,
            JobComplete: contract.JobComplete,
            StatusCode: contract.StatusCode,
            StartDate: contract.StartDate,
            EndDate: contract.EndDate,
            Owner: contract.Owner,
            Origin: contract.Origin,
            ChargeType: contract.ChargeType
          });
          this.processValidation = true;
          this.requestProcessing = false;
        },
        errorCode => this.statusCode = errorCode);
  }
  //Delete contract
  deleteContract(contractId: string) {
    this.preProcessConfigurations();
    this.contractService.deleteContractById(contractId)
      .subscribe(successCode => {
          //this.statusCode = successCode;
          //Expecting success code 204 from server
          this.statusCode = 204;
          this.getAllContracts();
          //this.backToCreateContract();
        },
        errorCode => this.statusCode = errorCode);
  }
  //Perform preliminary processing configurations
  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }



}
