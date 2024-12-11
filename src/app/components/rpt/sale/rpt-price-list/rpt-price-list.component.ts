import { Component, Input } from '@angular/core';
import { RptHeaderComponent } from '../../rpt-header/rpt-header.component';
import { SharedCommonModule } from '../../../../common/shared.module';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../../../services/localStorage.services';

@Component({
  selector: 'app-rpt-price-list',
  standalone:true,
  templateUrl: './rpt-price-list.component.html',
  styleUrl: './rpt-price-list.component.css',
  imports:[RptHeaderComponent,SharedCommonModule,CommonModule]
})
export class RptPriceListComponent {
  @Input() data:any;
  @Input() initialData:any;
  @Input() invoice: any;
  printName:any;
  storeInfo:any;

  constructor(private localStorage: StorageService){
    
  }

  ngOnInit(): void {
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
}
