import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { SharedCommonModule } from '../../../common/shared.module';
import { TableModule } from 'primeng/table';
import { Constant } from '../../../Constants/constants';
import { CommonModule, NgFor } from '@angular/common';
import { APIService } from '../../../services/api.service';
import { DataSubjectService } from '../../../Configs/DataSubject/dataSubject.service';
import { API_ENDPOINT } from '../../../environments/environments';
import { SaleOrderDialogComponent } from './voucher-detail/sale/sale-order-dialog/sale-order-dialog.component';
import { SaleInvoiceDialogComponent } from "./voucher-detail/sale/sale-invoice-dialog/sale-invoice-dialog.component";
import { UtilsService } from '../../../services/utils.service';
import { SaleReturnDialogComponent } from './voucher-detail/sale/sale-return-dialog/sale-return-dialog.component';
import { PurchaseInvoiceDialogComponent } from './voucher-detail/purchase/purchase-invoice-dialog/purchase-invoice-dialog.component';
import { PurchaseReturnDialogComponent } from './voucher-detail/purchase/purchase-return-dialog/purchase-return-dialog.component';
import { CashInDialogComponent } from './voucher-detail/cash/cash-in/cash-in-dialog/cash-in-dialog.component';
import { CashOutDialogComponent } from './voucher-detail/cash/cash-out/cash-out-dialog/cash-out-dialog.component';
import { PaymentTransferBankToBankDialogComponent } from './voucher-detail/cash/cash-transfer/payment-transfer-bank-to-bank-dialog/payment-transfer-bank-to-bank-dialog.component';
import { CustomerPaymentDialogComponent } from './voucher-detail/cash/cash-in/customer-payment-dialog/customer-payment-dialog.component';
import { CustomerRefurnDialogComponent } from './voucher-detail/cash/cash-out/customer-refurn-dialog/customer-refurn-dialog.component';
import { VendorPaymentDialogComponent } from './voucher-detail/cash/cash-out/vendor-payment-dialog/vendor-payment-dialog.component';
import { VendorRefurnDialogComponent } from './voucher-detail/cash/cash-in/vendor-refurn-dialog/vendor-refurn-dialog.component';
import { CustomerVendorPaymentDialogComponent } from './voucher-detail/cash/general/customer-vendor-payment-dialog/customer-vendor-payment-dialog.component';
import { PaymentAdjustBankDialogComponent } from './voucher-detail/cash/cash-adjust/payment-adjust-bank-dialog/payment-adjust-bank-dialog.component';
import { PaymentTransferBankDialogComponent } from './voucher-detail/cash/cash-transfer/payment-transfer-bank-dialog/payment-transfer-bank-dialog.component';
import { CustomerOpeningBalanceDialogComponent } from './voucher-detail/opening-balance/customer-opening-balance-dialog/customer-opening-balance-dialog.component';
import { VendorOpeningBalanceDialogComponent } from './voucher-detail/opening-balance/vendor-opening-balance-dialog/vendor-opening-balance-dialog.component';
import { PaymentAdjustDialogComponent } from './voucher-detail/cash/cash-adjust/payment-adjust-dialog/payment-adjust-dialog.component';
import { EsaleInvoiceEditorDialogComponent } from './voucher-detail/e-invoice/e-sale-invoice-editor-dialog/e-sale-invoice-editor-dialog.component';
import { EPurchaseInvoiceEditorDialogComponent } from './voucher-detail/e-invoice/e-purchase-invoice-editor-dialog/e-purchase-invoice-editor-dialog.component';
import { DebtAssigmentDialogComponent } from './voucher-detail/cash/general/debt-assigment-dialog/debt-assigment-dialog.component';
import { EmployeePaymentDialogComponent } from './voucher-detail/cash/cash-in/employee-payment-dialog/employee-payment-dialog.component';
import { CashInOutSouringDialogComponent } from './voucher-detail/cash/cash-in/cash-in-out-souring-dialog/cash-in-out-souring-dialog.component';
import { CashOutOutSouringDialogComponent } from './voucher-detail/cash/cash-out/cash-out-out-souring-dialog/cash-out-out-souring-dialog.component';
import { InvInvoiceDetailStockOutDialogComponent } from './inv-invoice-detail/inv-invoice-detail-stock-out-dialog/inv-invoice-detail-stock-out-dialog.component';

interface DataResult{
  master?:any,
  details:any[],
  referList:any[],
  isStockOutExtend:boolean,

};

@Component({
  selector: 'app-voucher-dialog',
  standalone: true,
  templateUrl: './voucher-dialog.component.html',
  styleUrl: './voucher-dialog.component.css',
  imports: [SharedCommonModule, TableModule, CommonModule, SaleOrderDialogComponent, SaleInvoiceDialogComponent,SaleReturnDialogComponent,PurchaseInvoiceDialogComponent,
    PurchaseReturnDialogComponent,CashInDialogComponent,CashOutDialogComponent,PaymentTransferBankToBankDialogComponent,CustomerPaymentDialogComponent,CustomerRefurnDialogComponent,
    VendorPaymentDialogComponent,VendorRefurnDialogComponent,CustomerVendorPaymentDialogComponent,PaymentAdjustBankDialogComponent,PaymentTransferBankDialogComponent,
    CustomerOpeningBalanceDialogComponent,VendorOpeningBalanceDialogComponent,PaymentAdjustDialogComponent,EsaleInvoiceEditorDialogComponent,EPurchaseInvoiceEditorDialogComponent,
    DebtAssigmentDialogComponent,EmployeePaymentDialogComponent,CashInOutSouringDialogComponent,CashOutOutSouringDialogComponent,
    InvInvoiceDetailStockOutDialogComponent,
  ]
})
export class VoucherDialogComponent implements OnInit{

  @Input() voucherReferenceSelected!:any;

  @Input() isVisible:boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  Constant = Constant;
  data:DataResult = {
    details:[],
    referList:[],
    isStockOutExtend:false,
  };

  constructor(private apiService:APIService, private dialogService: DataSubjectService, private utilsService: UtilsService){
    
  }
  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    
    if (changes['voucherReferenceSelected']) {
      if(this.voucherReferenceSelected){      
        this.GetVoucherInfo();
      }
    }
    if (changes['isVisible']) {
      

    }
  }

  GetVoucherInfo() {
    this.utilsService.OnLoadpage();
    const body = {
      VoucherID: this.voucherReferenceSelected.RefID, 
      VoucherType: this.voucherReferenceSelected.RefType,
    };
    this.apiService.callAPI(API_ENDPOINT.REPORT_ENDPOINT.VOUCHERDIALOG+"GetVoucherInfo", body).subscribe({
      next: (response: any) => {
        if (response.status == 1) {
          this.data.master = response.data.Master;
          this.data.details = response.data.Details;
          if(this.data.master.Type != -1){
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
          }
        } else {
          this.dialogService.showError(response.message);
        }
      },
      error: (error: any) => {

      },
      complete: () => {
        this.utilsService.OffLoadpage();
      }
    }); 
  }

  close(){
    this.isVisibleChange.emit(this.isVisible);
  }
}
