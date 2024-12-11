import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'input-number',
  standalone:true,
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.css',
  imports:[InputNumberModule,FormsModule]
})
export class InputNumberComponent {
  @Input() value!: number;
  @Input() min: number = 0;
  @Input() maxlength: string|number|null = null;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() name: string = '';
  @Input() inputId: string = '';
  @Input() className: string = '';

  @Input() allowNull: boolean = false;
  @Output() valueChange = new EventEmitter<any>();

  constructor(protected globalServer : GlobalService){

  }
  onValueChange() {
    this.valueChange.emit(this.value);
  }

  selectInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    inputElement.select(); // Bôi đen toàn bộ giá trị trong input
  }
}
