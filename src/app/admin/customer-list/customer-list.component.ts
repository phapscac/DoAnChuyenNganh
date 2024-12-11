import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
interface Data {
  CustomerList: any;
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  constructor(private api: ApiService, private router: Router) {

  }
  ngOnInit() {
    this.getCustomer();
  }
data: Data = {
  CustomerList: []  }
  selectedCustomerIds: Set<string> = new Set<string>();
  
  getCustomer = () => {
    this.api.getData('api/Customers').subscribe({
      next: (reponse) => {
        if (reponse.success) {
          this.data.CustomerList = reponse.data.items;
        } else {
        }
      },
      error: (error) => {
      }
    });
  }



  


}
