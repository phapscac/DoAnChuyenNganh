import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-source-dropdown',
  standalone:true,
  imports: [FormsModule,CommonModule,DropdownModule],
  templateUrl: './source-dropdown.component.html',
  styleUrl: './source-dropdown.component.css'
})
export class SourceDropdownComponent {
  @Input()type : 'source' | 'vatmethod' = 'source';
  @Input() sourceType!:number;
  @Input() styleClass:string = '';
  @Input() disabled:boolean = false;
  @Output() sourceTypeChange = new EventEmitter<any>();


  onSelected(){
    this.sourceTypeChange.emit(this.sourceType);
  }

}
