import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { RptHeaderComponent } from '../../rpt-header/rpt-header.component';
import { SharedCommonModule } from '../../../../common/shared.module';
import { StorageService } from '../../../../services/localStorage.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rpt-invoice',
  standalone:true,
  templateUrl: './rpt-invoice.component.html',
  styleUrl: './rpt-invoice.component.css',
  imports:[RptHeaderComponent,SharedCommonModule,CommonModule]
})
export class RptInvoiceComponent implements OnInit{
  @Input() data:any;
  printName:any;
  storeInfo:any;
  constructor(private localStorage: StorageService){
    
  }
  ngOnInit(): void {
    //const dateNow:Date = new Date(this.data.SaleInvoicePrintData.PrintDate); 
    this.storeInfo = {
      Logo: this.localStorage.getToken('StoreLogo'),
      SiteName: this.localStorage.getToken('StoreName'),
      AddressSite: this.localStorage.getToken('Address'),
      PhoneSite:this.localStorage.getToken('PhoneNumber'),
      FaxSite:this.localStorage.getToken('FaxNumber'),
      TaxNumberSite:this.localStorage.getToken('TaxNumber')
    };
    this.printName = this.localStorage.getToken('FullName');
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
}
