import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { SharedCommonModule } from '../../../../common/shared.module';
import { TableModule } from 'primeng/table';
import { Constant } from '../../../../Constants/constants';
import { CommonModule, NgFor } from '@angular/common';
import { APIService } from '../../../../services/api.service';
import { DataSubjectService } from '../../../../Configs/DataSubject/dataSubject.service';
import { API_ENDPOINT } from '../../../../environments/environments';
import { InvInvoiceDetailStockOutDialogComponent } from './inv-invoice-detail-stock-out-dialog/inv-invoice-detail-stock-out-dialog.component';


interface DataResult{
  master:any,
  details:any[],
  referList:any[],
  isStockOutExtend:boolean,

}

@Component({
  selector: 'app-inv-invoice-detail',
  standalone: true,
  templateUrl: './inv-invoice-detail.component.html',
  styleUrl: './inv-invoice-detail.component.css',
  imports: [SharedCommonModule,TableModule,CommonModule,
    InvInvoiceDetailStockOutDialogComponent,
  ]
})
export class InvInvoiceDetailComponent implements OnInit{

  @Input() voucherReferenceSelected!:any;

  @Input() isVisible:boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  Constant = Constant;
  data:DataResult = {
    master:{},
    details:[],
    referList:[],
    isStockOutExtend:false,
  };

  constructor(private apiService:APIService, private dialogService: DataSubjectService){
    
  }
  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    
    if (changes['voucherReferenceSelected']) {
      this.GetVoucherInfo();
    }
    if (changes['isVisible']) {
      

    }
  }

  GetVoucherInfo() {
    if(!this.voucherReferenceSelected)
      return;
    const body = {
      VoucherID: this.voucherReferenceSelected.RefID, 
      VoucherType: 102,
    };
    this.apiService.callAPI(API_ENDPOINT.REPORT_ENDPOINT.VOUCHERDIALOG+"GetVoucherInfo", body).subscribe({
      next: (response: any) => {
        if (response.status == 1) {
          this.data.master = response.data.Master;
          this.data.details = response.data.Details;
          switch (this.data.master.Type) {
            case 1:
                if (this.data.master.RefType == 12) {
                    //Nhap mua hang
                    this.data.master.InvoiceName = 'Phiếu nhập mua hàng';
                }
                else if (this.data.master.RefType == 13) {
                    //Nhap tra hang
                    this.data.master.InvoiceName = 'Phiếu nhập trả hàng';
                }
                break;
            case 2:
                if (this.data.master.RefType == 12) {
                    //xuất bán hàng
                    this.data.master.InvoiceName = 'Phiếu xuất bán hàng';
                }
                else if (this.data.master.RefType == 13) {
                    //xuất tra hang
                    this.data.master.InvoiceName = 'Phiếu xuất trả hàng';
                }
                break;
        }
        } else {
          this.dialogService.showError(response.message);
        }
      },
      error: (error: any) => {

      },
      complete: () => {
      }
    });

    



  }

  close(){
    this.isVisibleChange.emit(this.isVisible);
}
}
