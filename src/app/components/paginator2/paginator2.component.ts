import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { Paginator, PaginatorModule, PaginatorState } from 'primeng/paginator';
import { filter } from 'rxjs';
import { GlobalService } from '../../services/global.service';
import { SharedCommonModule } from '../../common/shared.module';

@Component({
  selector: 'app-paginator2',
  standalone: true,
  imports: [DropdownModule,PaginatorModule,CommonModule,SharedCommonModule],
  templateUrl: './paginator2.component.html',
  styleUrl: './paginator2.component.css'
})
export class PaginatorPopupComponent{
  constructor(private globalService:GlobalService){

  }
  //@ViewChild('paginator') paginator!: Paginator;

  first: number = 0;
  pageIndex:number = this.globalService.paging2.PageIndex;
  pageSize: number = this.globalService.paging2.PageSize;
  isReSearch = true;

  @Input() totalRows!:number;
  @Output() selectPageEvent = new EventEmitter<number>();
  @Output() selectRowsEvent = new EventEmitter<number>();
  // @Output() selectPageEvent:EventEmitter;
  options = [
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 50, value: 50 },
  ];
  
  onPageChange(event: PaginatorState) {
    this.globalService.paging2.PageIndex = event.page? event.page + 1 : 1;
    this.selectPageEvent.emit(this.pageIndex);
  }
  onRowsChange() {
    this.isReSearch = false;
    this.globalService.paging2.PageIndex = 1;
    this.globalService.paging2.PageSize = this.pageSize;
    this.selectRowsEvent.emit(this.pageSize);  
    setTimeout(() => {
      this.isReSearch = true;       
  }, 1);      
  }
}
