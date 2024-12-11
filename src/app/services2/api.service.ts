import { Injectable } from '@angular/core';
import { StorageService } from './localStorage.services';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ENDPOINT } from '../environments/environments';
import { Observable } from 'rxjs';
import { DataSubjectService } from '../Configs/DataSubject/dataSubject.service';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(
    private storageService: StorageService,
    private http: HttpClient,
    private localStorage: StorageService
  ) {}

  convertHttpHeader(token: string | null): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        Token: token ? token : '',
      }),
    };
    return httpOptions;
  }
  convertHttpHeaderFile(token: string | null): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        Token: token ? token : '',
      }),
    };
    return httpOptions;
  }

  //Hàm call api cho Sale_Order
  callAPISaleOrder(action: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      var response = this.http.post<void>(
        API_ENDPOINT.SALE_ENDPOINT.SALE_ORDER + action,
        body,
        this.convertHttpHeader(token)
      );
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho Sale_Order
  callAPISaleOrderNotToken(action: string, body: any): Observable<any> {
    try {
      const token = null;
      var response = this.http.post<void>(
        API_ENDPOINT.SALE_ENDPOINT.SALE_ORDER + action,
        body,
        this.convertHttpHeader(token)
      );
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho Sale_Invoice
  callAPISaleInvoice(action: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.SALE_ENDPOINT.SALE_INVOICE + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho Sale_Return
  callAPISaleReturn(action: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.SALE_ENDPOINT.SALE_RETURN + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho ESale_Invoice
  callAPIESaleInvoice(action: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.SALE_ENDPOINT.ESALE_INVOICE + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho Customer_Account
  callAPICustomerAccount(action: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.ACCOUNT_ENDPOINT.ACCOUNT_CUSTOMER + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho User_Account
  callAPIUserAccount(action: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.ACCOUNT_ENDPOINT.ACCOUNT_USER + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho Authentication
  callAPIAuthentication(action: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.AUTHEN_ENDPOINT.AUTHENTICATION + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho Authentication
  callAPIAuthenticationNotToken(action: string, body: any): Observable<any> {
    try {
      const token = null;
      return this.http.post<void>(
        API_ENDPOINT.AUTHEN_ENDPOINT.AUTHENTICATION + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho CUSTOMER
  callAPICustomer(action: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.LIST_ENDPOINT.CUSTOMER + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  //Hàm call api cho đối tượng khác
  callAPIOtherObject(action: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.LIST_ENDPOINT.CATEGORY + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho Search
  callAPISearch(action: string, body: any): Observable<any> {
    const token = this.storageService.getToken('Token');
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.LIST_ENDPOINT.SEARCH + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho Stock
  callAPIStock(action: string, body: any): Observable<any> {
    const token = this.storageService.getToken('Token');
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.LIST_ENDPOINT.STOCK + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho AccountBanking
  callAPIAccountBanking(action: string, body: any): Observable<any> {
    const token = this.storageService.getToken('Token');
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.LIST_ENDPOINT.ACCOUNTBANKING + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho Product
  callAPIProduct(action: string, body: any): Observable<any> {
    const token = this.storageService.getToken('Token');
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.LIST_ENDPOINT.PRODUCT + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho SystemList
  callAPISystemList(action: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.LIST_ENDPOINT.SYSTEMLLIST + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho Unit
  callAPIUnit(action: string, body: any): Observable<any> {
    const token = this.storageService.getToken('Token');
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.LIST_ENDPOINT.UNIT + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  //Hàm call api nhà vận chuyển
  callAPICarrier(action: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.LIST_ENDPOINT.CARRIER + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho SystemList
  callAPIReportHome(action: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.REPORT_ENDPOINT.HOME + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api nhà cung cấp
  callAPIVendor(action: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.LIST_ENDPOINT.VENDOR + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api loại nhà cung cấp
  callAPIVendorType(action: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.LIST_ENDPOINT.VENDOR + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api phụ cấp
  callAPIAllowance(action: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.HR_ENDPOINT.ALLOWANCE + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  callAPIEmployeeGroup(action: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.HR_ENDPOINT.EMPLOYEE + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  callAPIEmployee(action: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      return this.http.post<void>(
        API_ENDPOINT.HR_ENDPOINT.EMPLOYEE + action,
        body,
        this.convertHttpHeader(token)
      );
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho Sale_Order
  callAPI(url: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      var response = this.http.post<void>(
        url,
        body,
        this.convertHttpHeader(token)
      );
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  callAPIFile(url: string, body: any): Observable<any> {
    try {
      const token = this.storageService.getToken('Token');
      var response = this.http.post<void>(
        url,
        body,
        this.convertHttpHeaderFile(token)
      );
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  //Hàm call api cho Sale_Order
  callAPIWithoutToken(url: string, body: any): Observable<any> {
    try {
      const token = null;
      var response = this.http.post<void>(
        url,
        body,
        this.convertHttpHeader(token)
      );
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}
