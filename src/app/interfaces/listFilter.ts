
export interface TransactionFilter {
  fromDate: Date,
  toDate: Date,
  searchString:any,
}


  export interface SaleOrderFilter extends TransactionFilter{
    sortFieldName:any,
    status:any,
  }

  export interface SaleInvoiceFilter extends TransactionFilter{
    status:any,
    createdBy:any,
    sortFieldName:any,
    shipperID:string,

  }

  export interface ListFilter {
    searchString:string,
    activeType:any,
  }

  export interface StockOrderFilter extends TransactionFilter{
    createdBy:any,
    shipperID:string,
    customerTypeID:any,
    productCategoryID:any,
    productID:any,
  }

  export interface StockInFilter extends TransactionFilter{
    employeeID:any,
    vendorID:any,
    isPosted:boolean | null,
    status:number| null,
    stockID:string,
    searchString:string,
    orderBy:string,
    fromStockID:string,
  }

  export interface StockOutFilter extends TransactionFilter{
    employeeID:any,
    isPosted:boolean | null,
    status:number| null,
    stockID:string,
    searchString:string,
    orderBy:string,
    toStockID:string,
  }

  export interface PurchaseReturnFilter extends TransactionFilter{
  createByID?: string | null;
  vendorID?: string| null;
  vendorTypeID?: string| null;
  Isposted: number;
  voucherTypeID: number;
  storeID?: string| null;
  orderBy?: string| null;
  postType : number;
    
  }