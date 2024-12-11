// app-layout.component.ts
import { Component, OnInit } from '@angular/core';
import { DataSubjectService } from '../../../Configs/DataSubject/dataSubject.service';

@Component({
  selector: 'app-dialog',
  template: `
    <p-confirmDialog styleClass="cfdialog-sm history-dialog" #cd>
      <ng-template pTemplate="headless" let-message>
        <div class="flex flex-column  p-3 surface-overlay border-round">     
          <span class="font-bold text-xl block ">
            {{ message?.header }}
          </span>
          <div class="flex align-items-center mt-4">
          <p class="mb-0" [innerHTML]="message?.message"></p>
          </div>
          <div class="flex align-items-center justify-content-end gap-2 mt-4">
            <!-- <button pButton label="{{message?.acceptLabel}}" (click)="cd.accept()" class="w-8rem"></button>
            <button pButton label="{{message?.rejectLabel}}" (click)="cd.reject()" class="p-button-outlined w-8rem"></button> -->
            <button pButton class="btn btn-success" type="button" style="padding: 8px 16px; font-size: 14px;" (click)="cd.accept()" label="Đồng ý"></button>
            <button pButton  class="btn btn-success" type="button" style="padding: 8px 16px; font-size: 14px;" (click)="cd.reject()" label="Hủy"></button>
          </div>
        </div>
        </ng-template>      
        <!-- <ng-template let-message>
          <p style="margin-left: 5px;margin-right: 15px;" [innerHTML]="message.message"></p>
        </ng-template> -->
        <!-- <ng-template pTemplate="footer">
          <button pButton type="button" style="padding: 8px 16px; font-size: 14px;" (click)="cd.accept()" label="Đồng ý"></button>
          <button pButton type="button" style="padding: 8px 16px; font-size: 14px;" (click)="cd.reject()" label="Hủy"></button>
        </ng-template> -->
        </p-confirmDialog>
    
    <p-toast></p-toast>

  `
})
export class AppDialogComponent {}
