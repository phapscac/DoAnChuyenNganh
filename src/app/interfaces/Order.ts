export class Order {
    Checked: boolean | null;
    OrderID: string;
    SiteID: number;
    StoreID: string;
    AppID: number;
    OrderCode: string;
    CreatedBy: string | null;
    CreatedDate: string;
    DueDate: string;
    RefID: string | null;
    RefType: number;
    AccountingDate: Date;
    VoucherDate: Date;
    SourceType: number;
    CurrencyID: string;
    ExchangeRate: number;
    Amount: number;
    FCAmount: number;
    IsDiscountPercent: boolean;
    DiscountPercent: number;
    DiscountType:number;
    DiscountAmount: number;
    DiscountValue: number;
    TotalAmount: number;
    FCTotalAmount: number;
    Status: number;
    CustomerID: string;
    Code: string;
    CustomerName: string;
    CustomerPhone: string;
    CustomerEmail: string;
    FiscalID: string;
    ReferenceID: string;
    ReferenceCode: string;
    Notes: string;
    SaleInvoiceID: string | null;
    ShipAddress: string;
    SaleRef: string | null;
    TaxAmount: number;
    ShippingAlertStatus: number;
    ShippingAlert: string;
    StatusINV: number;
    SearchString: string;
    UserName: string;
    OrderPhone: string;
    CancelReason: string;
    PaymentMethodID: number;
    PaymentTermID: number;
    VATMethodID: number;
    ShipperID: string | null;
    AccountantID: string | null;
    Quantity: number;
    SourceName: string;
    StatusName: string;
    PrintBy: string | null;
    PrintDate: string | null;
    PrintName: string;
    PrintCount: number;
    StockID: string;
    StockName: string;
    TransportTypeID: number;
    TaxNotes: string;
    ShipperUserName: string;
    ShipperName: string;
    CustomerNameAlias: string;
    IsCustomerRetail: boolean;
    TaxCode: string;
    TaxCompanyName: string;
    TaxCompanyAddress: string;
    TaxCompanyEmail: string;
    AddressID: string | null;
    UpdatedDate: string | null;
    UpdatedBy: string | null;
    OrderType: number;
    OrderReturnType: number;
    AccountBankingTypeID: string | null;
    AccountBankingTypeName: string;
    DepositAmount: number;
    DepositNotes: string;
    DepositBy: string | null;
    NumberOfDebitReminder: number;
    PaymentTermType: number;
    PaymentTermNumber: string;
    CustomerTypeID: string;
    Address: string;
    AccountantUserName: string;
    AccountantName: string;
    PurchaseStatus: number;
    DepositeType: number | null;
    DepositeTransaction: string;
    ApprovedBy: string | null;
    ApprovedDate: string | null;
    DeliveryEntranceFee: number;
    DeliveryToHomeFee: number;
    DeliveryFee: number;
    DeliveryTotalFee: number;
    DeliveryMethodPayment: number;
    ProduceStatus: number;
    ConfirmOverDueBy: string | null;
    ConfirmOverDueDate: string | null;
    ConfirmOverDueName: string;
    ConfirmOverDuePhone: string;
    ConfirmOverDuePayDate: string | null;
    ConfirmOverDueAmount: number;
    ConfirmOverDueNote: string;
VATMethodName: any;
PaymentMethodName: any;

    constructor(
        Checked: boolean | null = null,
        OrderID: string = '',
        SiteID: number = 0,
        StoreID: string = '',
        AppID: number = 0,
        OrderCode: string = '',
        CreatedBy: string | null = null,
        CreatedDate: string = '',
        DueDate: string = '',
        RefID: string | null = null,
        RefType: number = 0,
        AccountingDate: Date = new Date(),
        VoucherDate: Date = new Date(),
        SourceType: number = 0,
        CurrencyID: string = '',
        ExchangeRate: number = 0,
        Amount: number = 0,
        FCAmount: number = 0,
        IsDiscountPercent: boolean = false,
        DiscountType:number = 1,
        DiscountPercent: number = 0,
        DiscountAmount: number = 0,
        DiscountValue: number = 0,
        TotalAmount: number = 0,
        FCTotalAmount: number = 0,
        Status: number = 0,
        CustomerID: string = '',
        Code: string = '',
        CustomerName: string = '',
        CustomerPhone: string = '',
        CustomerEmail: string = '',
        FiscalID: string = '',
        ReferenceID: string = '',
        ReferenceCode: string = '',
        Notes: string = '',
        SaleInvoiceID: string | null = null,
        ShipAddress: string = '',
        SaleRef: string | null = null,
        TaxAmount: number = 0,
        ShippingAlertStatus: number = 0,
        ShippingAlert: string = '',
        StatusINV: number = 0,
        SearchString: string = '',
        UserName: string = '',
        OrderPhone: string = '',
        CancelReason: string = '',
        PaymentMethodID: number = 0,
        PaymentTermID: number = 0,
        VATMethodID: number = 0,
        ShipperID: string | null = null,
        AccountantID: string | null = null,
        Quantity: number = 0,
        SourceName: string = '',
        StatusName: string = '',
        PrintBy: string | null = null,
        PrintDate: string | null = null,
        PrintName: string = '',
        PrintCount: number = 0,
        StockID: string = '',
        StockName: string = '',
        TransportTypeID: number = 0,
        TaxNotes: string = '',
        ShipperUserName: string = '',
        ShipperName: string = '',
        CustomerNameAlias: string = '',
        IsCustomerRetail: boolean = false,
        TaxCode: string = '',
        TaxCompanyName: string = '',
        TaxCompanyAddress: string = '',
        TaxCompanyEmail: string = '',
        AddressID: string | null = null,
        UpdatedDate: string | null = null,
        UpdatedBy: string | null = null,
        OrderType: number = 0,
        OrderReturnType: number = 0,
        AccountBankingTypeID: string | null = null,
        AccountBankingTypeName: string = '',
        DepositAmount: number = 0,
        DepositNotes: string = '',
        DepositBy: string | null = null,
        NumberOfDebitReminder: number = 0,
        PaymentTermType: number = 0,
        PaymentTermNumber: string = '',
        CustomerTypeID: string = '',
        Address: string = '',
        AccountantUserName: string = '',
        AccountantName: string = '',
        PurchaseStatus: number = 0,
        DepositeType: number | null = null,
        DepositeTransaction: string = '',
        ApprovedBy: string | null = null,
        ApprovedDate: string | null = null,
        DeliveryEntranceFee: number = 0,
        DeliveryToHomeFee: number = 0,
        DeliveryFee: number = 0,
        DeliveryTotalFee: number = 0,
        DeliveryMethodPayment: number = 0,
        ProduceStatus: number = 0,
        ConfirmOverDueBy: string | null = null,
        ConfirmOverDueDate: string | null = null,
        ConfirmOverDueName: string = '',
        ConfirmOverDuePhone: string = '',
        ConfirmOverDuePayDate: string | null = null,
        ConfirmOverDueAmount: number = 0,
        ConfirmOverDueNote: string = ''
    ) {
        this.Checked = Checked;
        this.OrderID = OrderID;
        this.SiteID = SiteID;
        this.StoreID = StoreID;
        this.AppID = AppID;
        this.OrderCode = OrderCode;
        this.CreatedBy = CreatedBy;
        this.CreatedDate = CreatedDate;
        this.DueDate = DueDate;
        this.RefID = RefID;
        this.RefType = RefType;
        this.AccountingDate = AccountingDate;
        this.VoucherDate = VoucherDate;
        this.SourceType = SourceType;
        this.CurrencyID = CurrencyID;
        this.ExchangeRate = ExchangeRate;
        this.Amount = Amount;
        this.FCAmount = FCAmount;
        this.IsDiscountPercent = IsDiscountPercent;
        this.DiscountType = DiscountType;
        this.DiscountPercent = DiscountPercent;
        this.DiscountAmount = DiscountAmount;
        this.DiscountValue = DiscountValue;
        this.TotalAmount = TotalAmount;
        this.FCTotalAmount = FCTotalAmount;
        this.Status = Status;
        this.CustomerID = CustomerID;
        this.Code = Code;
        this.CustomerName = CustomerName;
        this.CustomerPhone = CustomerPhone;
        this.CustomerEmail = CustomerEmail;
        this.FiscalID = FiscalID;
        this.ReferenceID = ReferenceID;
        this.ReferenceCode = ReferenceCode;
        this.Notes = Notes;
        this.SaleInvoiceID = SaleInvoiceID;
        this.ShipAddress = ShipAddress;
        this.SaleRef = SaleRef;
        this.TaxAmount = TaxAmount;
        this.ShippingAlertStatus = ShippingAlertStatus;
        this.ShippingAlert = ShippingAlert;
        this.StatusINV = StatusINV;
        this.SearchString = SearchString;
        this.UserName = UserName;
        this.OrderPhone = OrderPhone;
        this.CancelReason = CancelReason;
        this.PaymentMethodID = PaymentMethodID;
        this.PaymentTermID = PaymentTermID;
        this.VATMethodID = VATMethodID;
        this.ShipperID = ShipperID;
        this.AccountantID = AccountantID;
        this.Quantity = Quantity;
        this.SourceName = SourceName;
        this.StatusName = StatusName;
        this.PrintBy = PrintBy;
        this.PrintDate = PrintDate;
        this.PrintName = PrintName;
        this.PrintCount = PrintCount;
        this.StockID = StockID;
        this.StockName = StockName;
        this.TransportTypeID = TransportTypeID;
        this.TaxNotes = TaxNotes;
        this.ShipperUserName = ShipperUserName;
        this.ShipperName = ShipperName;
        this.CustomerNameAlias = CustomerNameAlias;
        this.IsCustomerRetail = IsCustomerRetail;
        this.TaxCode = TaxCode;
        this.TaxCompanyName = TaxCompanyName;
        this.TaxCompanyAddress = TaxCompanyAddress;
        this.TaxCompanyEmail = TaxCompanyEmail;
        this.AddressID = AddressID;
        this.UpdatedDate = UpdatedDate;
        this.UpdatedBy = UpdatedBy;
        this.OrderType = OrderType;
        this.OrderReturnType = OrderReturnType;
        this.AccountBankingTypeID = AccountBankingTypeID;
        this.AccountBankingTypeName = AccountBankingTypeName;
        this.DepositAmount = DepositAmount;
        this.DepositNotes = DepositNotes;
        this.DepositBy = DepositBy;
        this.NumberOfDebitReminder = NumberOfDebitReminder;
        this.PaymentTermType = PaymentTermType;
        this.PaymentTermNumber = PaymentTermNumber;
        this.CustomerTypeID = CustomerTypeID;
        this.Address = Address;
        this.AccountantUserName = AccountantUserName;
        this.AccountantName = AccountantName;
        this.PurchaseStatus = PurchaseStatus;
        this.DepositeType = DepositeType;
        this.DepositeTransaction = DepositeTransaction;
        this.ApprovedBy = ApprovedBy;
        this.ApprovedDate = ApprovedDate;
        this.DeliveryEntranceFee = DeliveryEntranceFee;
        this.DeliveryToHomeFee = DeliveryToHomeFee;
        this.DeliveryFee = DeliveryFee;
        this.DeliveryTotalFee = DeliveryTotalFee;
        this.DeliveryMethodPayment = DeliveryMethodPayment;
        this.ProduceStatus = ProduceStatus;
        this.ConfirmOverDueBy = ConfirmOverDueBy;
        this.ConfirmOverDueDate = ConfirmOverDueDate;
        this.ConfirmOverDueName = ConfirmOverDueName;
        this.ConfirmOverDuePhone = ConfirmOverDuePhone;
        this.ConfirmOverDuePayDate = ConfirmOverDuePayDate;
        this.ConfirmOverDueAmount = ConfirmOverDueAmount;
        this.ConfirmOverDueNote = ConfirmOverDueNote;
    }
}

export interface Store{
    StoreID: string;
    SiteID: number;
    Name: string
}

export interface Application{
    AppID: number;
    AppName: string;
}
export class Order1 {
    DueDate: Date;
    OrderCode:String;
    constructor(DueDate: string,OrderCode: string)
    {
        this.DueDate = new Date(DueDate);
        this.OrderCode = OrderCode;
    }
}