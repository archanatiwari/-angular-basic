export class Contract {
    constructor(
        public id : string,
        public ContractCode : string,
        public ContractDescription : string,
        public SORTitle : string,
        public DefaultQuestionSet : string,
        public ListName : string,
        public InvoiceType : string,
        public RententionPercentage : string,
        public RetentionPeriod : string,
        public PlannedMaintenance : string,
        public JobComplete : string,
        public StatusCode : string,
        public StartDate : string,
        public EndDate : string,
        public Owner : string,
        public Origin : string,
        public ChargeType : string
    ) { }
}
