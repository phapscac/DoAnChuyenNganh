import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Directive({
  selector: '[appConfirmPopup]'
})
export class ConfirmPopupDirective {
  @Input() confirmHeader: string = '';
  @Input() confirmMessage: string = '';
  @Input() acceptLabel: string = 'Xác nhận';
  @Input() rejectLabel: string = 'Đóng';

  @Output() onAccept: EventEmitter<void> = new EventEmitter();
  @Output() onReject: EventEmitter<void> = new EventEmitter();

  constructor(private confirmationService: ConfirmationService) { }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    this.confirmationService.confirm({
      header: this.confirmHeader,
      message: this.confirmMessage,
      acceptLabel: this.acceptLabel,
      rejectLabel: this.rejectLabel,
      accept: () => {
        this.onAccept.emit();
      },
      reject: () => {
        this.onReject.emit();
      }
    });
  }
}
