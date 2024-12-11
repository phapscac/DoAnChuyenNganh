import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { SharedCommonModule } from '../../../../../../common/shared.module';
import { TableModule } from 'primeng/table';
import { Constant } from '../../../../../../Constants/constants';
import { CommonModule, NgFor } from '@angular/common';
import { APIService } from '../../../../../../services/api.service';
import { DataSubjectService } from '../../../../../../Configs/DataSubject/dataSubject.service';

interface DataResult{
  master?:any,
  details:any[],
  referList:any[],
  isStockOutExtend:boolean,
}

@Component({
  selector: 'app-vendor-opening-balance-dialog',
  standalone: true,
  templateUrl: './vendor-opening-balance-dialog.component.html',
  styleUrl: './vendor-opening-balance-dialog.component.css',
  imports: [SharedCommonModule,TableModule,CommonModule]
})
export class VendorOpeningBalanceDialogComponent implements OnInit{

  @Input() isVisible:boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  Constant = Constant;
  @Input() data!:DataResult;

  constructor(private apiService:APIService, private dialogService: DataSubjectService){
    
  }
  ngOnInit(): void {
    
  }

  close(){
    this.isVisibleChange.emit(this.isVisible);
  }
}
