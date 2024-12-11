import { Component, Input, SimpleChanges } from '@angular/core';
import { RptHeaderComponent } from '../../rpt-header/rpt-header.component';
import { SharedCommonModule } from '../../../../common/shared.module';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../../../services/localStorage.services';

@Component({
  selector: 'app-rpt-return-order',
  standalone: true,
  templateUrl: './rpt-return-order.component.html',
  styleUrl: './rpt-return-order.component.css',
  imports:[RptHeaderComponent,SharedCommonModule,CommonModule]
})
export class RptReturnOrderComponent {
  @Input() data:any;
  constructor(private localStorage: StorageService){
    
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
}
