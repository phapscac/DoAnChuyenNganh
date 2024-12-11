import { Component , Input, OnInit, SimpleChanges } from '@angular/core';
import { SharedCommonModule } from '../../../../common/shared.module';
import { StorageService } from '../../../../services/localStorage.services';
import { CommonModule } from '@angular/common';
import { RptHeaderComponent } from '../../rpt-header/rpt-header.component';

@Component({
  selector: 'app-rpt-shipping-out',
  standalone:true,
  templateUrl: './rpt-shipping-out.component.html',
  styleUrl: './rpt-shipping-out.component.css',
  imports:[RptHeaderComponent,SharedCommonModule,CommonModule]
})
export class RptShippingOutComponent {
  @Input() data:any;
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

  getChannelName(chanelId: any) {
    if (chanelId == 1)
      return "Lalamove";
    else if (chanelId == 2)
      return "Ahamove";
    else if (chanelId == 3)
      return "Giao hàng tiết kiệm";
    else if (chanelId == 4)
      return "Giao hàng nhanh";
    else if (chanelId == 100)
      return "Giao hàng theo chành xe";
    else if (chanelId == 101)
      return "Giao hàng nội bộ";
    else
      return "Chưa xác định"
  };
}
