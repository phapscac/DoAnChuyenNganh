import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { filter } from 'rxjs';
import { GlobalService } from '../../services/global.service';
import { SharedCommonModule } from '../../common/shared.module';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [DropdownModule,PaginatorModule,CommonModule,SharedCommonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  constructor(private globalService:GlobalService){

  }

  first: number = 0;
  pageIndex:number = this.globalService.paging.PageIndex;
  pageSize: number = this.globalService.paging.PageSize;
  isReSearch = true;

  @Input() totalRows!:number;
  @Output() selectPageEvent = new EventEmitter<number>();
  @Output() selectRowsEvent = new EventEmitter<number>();
  // @Output() selectPageEvent:EventEmitter;
  options = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 15, value: 15 },
    { label: 20, value: 20 },
    { label: 30, value: 30 },
    { label: 50, value: 50 },
    { label: 100, value: 100 },
    { label: 200, value:200 },
    { label: 300, value:300 }
  ];
  
  onPageChange(event: PaginatorState) {
    this.globalService.paging.PageIndex = event.page? event.page + 1 : 1;
    this.selectPageEvent.emit(this.pageIndex);
  }
  onRowsChange() {
    this.isReSearch = false;
    this.globalService.paging.PageSize = this.pageSize;
    this.selectRowsEvent.emit(this.pageSize);  
    setTimeout(() => {
      this.isReSearch = true;       
  }, 1);      
  }
}
