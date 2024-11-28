import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/localStorage.services';
import { APIService } from '../../../services/api.service';
import { DataSubjectService } from '../../../Configs/DataSubject/dataSubject.service';

@Component({
  selector: 'app-rpt-header',
  standalone:true,
  templateUrl: './rpt-header.component.html',
  styleUrl: './rpt-header.component.css',
  imports:[CommonModule]
})
export class RptHeaderComponent implements OnInit {
  
  constructor(private localStorage: StorageService, private apiService: APIService, private dialogService: DataSubjectService){

  }

  storeInfo:any;
  ngOnInit(): void {
    this.storeInfo = {
      Logo: this.localStorage.getToken('StoreLogo'),
      SiteName: this.localStorage.getToken('StoreName'),
      AddressSite: this.localStorage.getToken('Address'),
      PhoneSite:this.localStorage.getToken('PhoneNumber'),
      FaxSite:this.localStorage.getToken('FaxNumber'),
      TaxNumberSite:this.localStorage.getToken('TaxNumber')
    };
    // const logo = this.localStorage.getToken('StoreLogo');
    // if(logo){
    //   this.storeInfo.Logo = logo;
    // }
      
  }
}
