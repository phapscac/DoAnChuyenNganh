import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedCommonModule } from '../../../../common/shared.module';

@Component({
  selector: 'app-rpt-sale-shipping',
  standalone:true,
  templateUrl: './rpt-sale-shipping.component.html',
  styleUrl: './rpt-sale-shipping.component.css',
  imports:[CommonModule,SharedCommonModule]
})
export class RptSaleShippingComponent {

  @Input() data:any;
  constructor(){
    
  }
}
