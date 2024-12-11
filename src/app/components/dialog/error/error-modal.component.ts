import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataSubjectService } from '../../../Configs/DataSubject/dataSubject.service';

@Component({
  selector: 'app-error-modal',
  template: `
  <p-dialog
    #dialog 
          [(visible)]="visible"
          [modal]="true"
          [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }"
          [style]="{width: 'auto'}"
          styleClass="history-dialog"
          [resizable]="false">
  <ng-template pTemplate="header">
    <strong>Thông báo</strong>
  </ng-template>
  <div>

  </div>
  <p *ngIf="message"  style="padding-left: 15px;padding-right: 15px;" [innerHTML]="message"></p>
  <p *ngIf="!message" style="padding-left: 15px;padding-right: 15px;">message NULL</p>
  <ng-template pTemplate="footer">
    <button pButton type="button" style="padding: 8px 16px; font-size: 14px;" (click)="close()" label="Đóng"></button>
  </ng-template>
</p-dialog>
  `,
})
export class ErrorModalComponent implements OnInit {
  visible: boolean = false;
  message: string = '';
  constructor(private dialog: DataSubjectService) {
    
  }

  ngOnInit() {
    this.dialog.errorVisible$.subscribe((visible: any) => {
      this.visible = visible;
    });
    this.dialog.errorMessage$.subscribe((message: any) => {
      this.message = message; 
    })
  }

  close() {
    this.dialog.close();
  }
}
