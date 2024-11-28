import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { SharedCommonModule } from '../../common/shared.module';

@Component({
  selector: 'app-paginator3',
  standalone: true,
  templateUrl: './paginator3.component.html',
  imports: [DropdownModule,PaginatorModule,CommonModule,SharedCommonModule],
  styleUrl: './paginator3.component.css'
})
export class Paginator3Component {
  constructor(private globalService:GlobalService){

  }
  //@ViewChild('paginator') paginator!: Paginator;

  first: number = 0;
  pageIndex:number = this.globalService.paging3.PageIndex;
  pageSize: number = this.globalService.paging3.PageSize;
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
    this.globalService.paging3.PageIndex = event.page? event.page + 1 : 1;
    this.selectPageEvent.emit(this.pageIndex);
  }
  onRowsChange() {
    this.isReSearch = false;
    this.globalService.paging3.PageIndex = 1;
    this.globalService.paging3.PageSize = this.pageSize;
    this.selectRowsEvent.emit(this.pageSize);  
    setTimeout(() => {
      this.isReSearch = true;       
  }, 1);      
  }
}
