import { Component, Input, SimpleChanges } from '@angular/core';
import { RptHeaderComponent } from '../../rpt-header/rpt-header.component';
import { SharedCommonModule } from '../../../../common/shared.module';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../../../services/localStorage.services';

@Component({
  selector: 'app-rpt-return',
  standalone:true,
  templateUrl: './rpt-return.component.html',
  styleUrl: './rpt-return.component.css',
  imports:[RptHeaderComponent,SharedCommonModule,CommonModule]

})
export class RptReturnComponent {
  @Input() data:any;
  constructor(private localStorage: StorageService){
    
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
}
