import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { RptHeaderComponent } from '../../rpt-header/rpt-header.component';
import { SharedCommonModule } from '../../../../common/shared.module';
import { StorageService } from '../../../../services/localStorage.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rpt-order',
  standalone:true,
  templateUrl: './rpt-order.component.html',
  styleUrl: './rpt-order.component.css',
  imports:[RptHeaderComponent,SharedCommonModule,CommonModule]
})
export class RptOrderComponent implements OnInit {
  @Input() data:any;
  printName:any;
  constructor(private localStorage: StorageService){
    
  }
  ngOnInit(): void {
    //const dateNow:Date = new Date(this.data.OrderPrintData.PrintDate); 
    this.printName = this.localStorage.getToken('FullName');
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  
}
