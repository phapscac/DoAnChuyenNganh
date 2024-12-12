import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { get } from 'http';
interface Data {
  CustomerList: any;
}
interface Contract{
  ContractId:any;
}

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  constructor(private api:ApiService) { }

  countries: any[] | undefined;

    selectedCountry: any | undefined;

    ngOnInit() {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];
    }
  contract: Contract = {
    ContractId: ''
  }
data: Data = {
    CustomerList: []
}
tenKH: any;
  getCustomer = () => {
    this.api.getData('api/Customers').subscribe({
      next: (reponse) => {
        if (reponse.success) {
          this.data.CustomerList = reponse.data.items;
          console.log(this.data.CustomerList);
        } else {
        }
      },
      error: (error) => {
      }
    });
  }

  

}
