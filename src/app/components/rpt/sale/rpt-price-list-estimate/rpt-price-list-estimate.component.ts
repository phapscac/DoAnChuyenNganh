import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedCommonModule } from '../../../../common/shared.module';
import { RptHeaderComponent } from '../../rpt-header/rpt-header.component';
import { StorageService } from '../../../../services/localStorage.services';

@Component({
  selector: 'app-rpt-price-list-estimate',
  standalone:true,
  templateUrl: './rpt-price-list-estimate.component.html',
  styleUrl: './rpt-price-list-estimate.component.css',
  imports:[RptHeaderComponent,SharedCommonModule,CommonModule]
})
export class RptPriceListEstimateComponent {
  @Input() data:any;
  @Input() initialData:any;
  @Input() printData: any;
  @Input() stampFile:any;
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
