import { Injectable } from '@angular/core';
import { Paging } from '../interfaces/paging';
import { Permission} from '../interfaces/permission'
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  paging!:Paging;
  paging2!:Paging;
  paging3!:Paging;
  permission:Permission = new Permission();

  maxFractionDigits = 3; 
  lifeTimeToast = 1500;

  maxSizeFileUpload = 2 * 1048576;

  readonly oneRowSize = 75;
  readonly twoRowSize = 2 * this.oneRowSize;
  readonly threeRowSize = 3 * this.oneRowSize;
  readonly fourRowSize = 4 * this.oneRowSize;
  constructor() {
    this.paging = new Paging();
    this.paging2 = new Paging(10);
    this.paging3 = new Paging(20);
  }

  
  fiscalStartDate = new Date();
  finance = {
    isAccount: true
  }

  sortFiled = [
    {name:'Số chứng từ giảm dần', value:'OrderCode;Desc'},
    {name:'Số chứng từ tăng dần', value:'OrderCode;Asc'},
    {name:'Ngày giao giảm dần', value:'AccountingDate;Desc'},
    {name:'Ngày giao tăng dần', value:'AccountingDate;Asc'},
    {name:'Ngày tạo giảm dần', value:'CreatedDate;Desc'},
    {name:'Ngày tạo tăng dần', value:'CreatedDate;Asc'},
    {name:'Tổng tiền giảm dần', value:'TotalAmount;Desc,OrderCode;Desc'},
    {name:'Tổng tiền tăng dần', value:'TotalAmount,OrderCode;Asc'}
  ];
  sortFiledInvoice = [
    {name:'Số chứng từ giảm dần', value:'Code;Desc'},
    {name:'Số chứng từ tăng dần', value:'Code;Asc'},
    {name:'Ngày giao giảm dần', value:'AccountingDate;Desc'},
    {name:'Ngày giao tăng dần', value:'AccountingDate;Asc'},
    {name:'Ngày tạo giảm dần', value:'CreatedDate;Desc'},
    {name:'Ngày tạo tăng dần', value:'CreatedDate;Asc'},
    {name:'Tổng tiền giảm dần', value:'TotalAmount;Desc,Code;Desc'},
    {name:'Tổng tiền tăng dần', value:'TotalAmount,Code;Asc'}
  ];

  sortFiledSaleReturn = [
    {name:'Số chứng từ giảm dần', value:'Code;Desc'},
    {name:'Số chứng từ tăng dần', value:'Code;Asc'},
    {name:'Ngày hạch toán giảm dần', value:'AccountingDate;Desc'},
    {name:'Ngày hạch toán tăng dần', value:'AccountingDate;Asc'},
    {name:'Ngày tạo giảm dần', value:'CreatedDate;Desc'},
    {name:'Ngày tạo tăng dần', value:'CreatedDate;Asc'},
    {name:'Tổng tiền giảm dần', value:'TotalAmount;Desc,Code;Desc'},
    {name:'Tổng tiền tăng dần', value:'TotalAmount,Code;Asc'}
  ];

  scrollHeightCalculator(sizeChange:number):string{
    return `calc(75vh - ${sizeChange}px - 100px)`
  }
}

