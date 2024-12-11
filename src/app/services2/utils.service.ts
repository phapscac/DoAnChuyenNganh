import { Injectable,  } from '@angular/core';
import { Order1 } from '../interfaces/Order';
import { GlobalService } from './global.service';
import { DataSubjectService } from '../Configs/DataSubject/dataSubject.service';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {

  constructor(private globalService : GlobalService, private dialogService : DataSubjectService,
  ) { }
//   toLowerCaseNonAccentVietnamese(str: string) {
//     str = str.toLowerCase();
// //     We can also use this instead of from line 11 to line 17
// //     str = str.replace(/\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g, "a");
// //     str = str.replace(/\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g, "e");
// //     str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
// //     str = str.replace(/\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g, "o");
// //     str = str.replace(/\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g, "u");
// //     str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
// //     str = str.replace(/\u0111/g, "d");
//     str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
//     str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
//     str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
//     str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
//     str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
//     str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
//     str = str.replace(/đ/g, "d");
//     // Some system encode vietnamese combining accent as individual utf-8 characters
//     str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
//     str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
//     return str;
// }

// This function keeps the casing unchanged for str, then perform the conversion
toNonAccentVietnamese(str: string) {
      str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/Đ/g, "D");
      str = str.replace(/đ/g, "d");
      // Some system encode vietnamese combining accent as individual utf-8 characters
      str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
      str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
      return str;
  }
  toLowerCaseNonAccentVietnamese(str: string): string {
    str = str.toLowerCase();

    // Define replacement arrays for vowels with diacritics
    const accentsMap: { [key: string]: string } = {
        'a': 'à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ',
        'e': 'è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ',
        'i': 'ì|í|ị|ỉ|ĩ',
        'o': 'ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ',
        'u': 'ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ',
        'y': 'ỳ|ý|ỵ|ỷ|ỹ',
        'd': 'đ',
    };

    for (let nonAccent in accentsMap) {
        const accentPattern = new RegExp(accentsMap[nonAccent], 'g');
        str = str.replace(accentPattern, nonAccent);
    }

    // Remove combining diacritical marks
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng 
    str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư

    return str;
  }
   
  OnLoadpage() {
    const el = document.getElementById('PageLoading')
    if(el) el.style.display='block';  
  }
  OnLoadpageBg() {
    const el = document.getElementById('PageLoading')
    el?.classList.add('bg-2');
    if(el) el.style.display='block';  
  }
  OffLoadpage() {
    const el = document.getElementById('PageLoading');
    if(el) el.style.display = "none";
    el?.classList.remove('bg-2');
  }

  DateAdd(date:Date, days : number) : Date{
    const dateValue = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    dateValue.setHours(0,1);
    return dateValue;
  }

  getToDate(days : number=3) : Date{
    const timenowValue = new Date().getTime();
    const dateValue = new Date(timenowValue + days * 24 * 60 * 60 * 1000);
    dateValue.setHours(23,59)
    return dateValue;
  }
 //set giờ phút
  SetTimeToDate(date: Date, hours: number, minutes: number): Date {
    const updatedDate = new Date(date);
    updatedDate.setHours(hours, minutes, 0, 0); // Giờ, phút, giây, và milliseconds
    return updatedDate;
  }

  getFirstDateOfMonth() : Date{
    let dateValue = new Date(new Date().setDate(1));
    return dateValue;
  }
  getLastDateOfMonth() : Date{
    let dateValue = new Date(new Date(new Date().setMonth(new Date().getMonth() + 1)).setDate(0));
    return dateValue;
  }

  //Hàm làm tròn
  // value: số cần làm tròn
  // place: số bậc làm tròn. -3: hàng nghìn, -4: chục nghìn, 1: 1 số lẻ thập phân, 2: 2 số lẻ
  round(value: number, place: number): number{
    place = -place;
    const factor = Math.pow(10, place);
    const roundedNumber = Math.round(value / factor) * factor
    // Nếu số đã làm tròn là một số nguyên, trả về số nguyên đó
    if (roundedNumber % 1 === 0) {
      return Math.round(roundedNumber);
  }
    return roundedNumber;
  }

  changeTaxRate(taxId: number): number{
    if(taxId ==1 || taxId == 2)
      return 0;
    else if(taxId==3)
      return 5;
    else if(taxId == 4)
      return 10;
    else if(taxId == 6)
      return 8;
    else 
      return 0;
  }

  deepCopy<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      const arrCopy = [] as any[];
      for (const item of obj) {
        arrCopy.push(this.deepCopy(item));
      }
      return arrCopy as unknown as T;
    }
  
    const objCopy = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        (objCopy as any)[key] = this.deepCopy((obj as any)[key]);
      }
    }
    return objCopy;
  }

  makeEmpty<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    const emptyObj = {} as T;
    const guidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (typeof value === 'string') {
              if(guidPattern.test(value)){
                emptyObj[key] = this.GuidEmpty() as any;
              }else{
                emptyObj[key] = null as any;
              }
                
            } else if (typeof value === 'number') {
                emptyObj[key] = 0 as any;
            } else if (typeof value === 'boolean') {
                emptyObj[key] = false as any;
            } else if (Array.isArray(value)) {
                emptyObj[key] = [] as any;
            } else if (typeof value === 'object' && value !== null) {
                emptyObj[key] = this.makeEmpty(value);
            } else {
                emptyObj[key] = null as any;
            }
        }
    }
    return emptyObj;
}

  GuidEmpty():string {
    return '00000000-0000-0000-0000-000000000000'
  }

  newGuid(): string {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  ShowActionHistoryName(action:string) {
    var name = "";
    switch (action) {
        case "post":
            name = "Ghi sổ";
            break;
        case "unpost":
            name = "Bỏ ghi sổ";
            break;
        case "insert":
            name = "Thêm mới";
            break;
        case "update":
            name = "Cập nhật";
            break;
        case "delete":
            name = "Xóa";
            break;
        case "sendrequest":
            name = "Gửi yêu cầu";
            break;
        case "cancelrequest":
            name = "Hủy yêu cầu";
            break;
        case "publish":
            name = "Phát hành";
            break;
        case "replace":
            name = "Bị Thay thế";
            break;
        case "publishreplace":
            name = "Phát hành HĐ TT";
            break;
        case "sign":
            name = "Ký phát hành";
            break;
        case "cancel":
            name = "Hủy hóa đơn";
            break;
        case "print":
            name = "In";
            break;
        case "approval":
            name = "Kho duyệt";
            break;
        case "confirmdebit":
            name = "Xác nhận nợ quá hạn";
            break;
        case "canceldebit":
            name = "Hủy đơn nợ quá hạn";
            break;
        case "voucherrecieve":
            name = "GH nhận phiếu";
            break;
        case "voucherreturn":
            name = "GH trả lại phiếu";
            break;
        case "productrecieve":
            name = "GH nhận hàng";
            break;
        case "nothandout":
            name = "Không giao được";
            break;
        case "handout":
            name = "Giao đến khách";
            break;
        case "handoutany":
            name = "Có trả lại hàng";
            break;
        case "voucherapply":
            name = "GH nộp phiếu";
            break;
        case "releasestock":
            name = "Xuất kho";
            break;
        case "recievestock":
            name = "Kho nhận hàng";
            break;
        case "vacantstock":
            name = "Kho bấm thiếu hàng";
            break;
        case "refuse":
            name = "Từ chối";
            break;
        case "notify":
            name = "Thông báo nợ";
            break;
        case "returntostock":
            name = "GH giao hàng và phiếu đến kho";
            break;
        case "receiveafterstockin":
            name = "GH nhận lại phiếu từ kho";
            break;
        default:
            name = "";
            break;
    }
    return name;
  };
  changeDateToDateText(printDate:Date):string {
    return "Ngày " + printDate.getDate() + " tháng " + (printDate.getMonth() + 1) + " năm " + printDate.getFullYear();
  }
  formatNumber00(number:any):string {
    var result = number;
    if (number < 10)
        result = '0' + number;
    return result;
  };

  truncTime(date:Date) :Date{
    var dateTmp = new Date(date);

    return new Date(dateTmp.getFullYear(), dateTmp.getMonth(), dateTmp.getDate(), 0, 0, 0);
};
//****************Cắt bỏ giờ trong ngày => Chuyển về 0:0:0**************//

  compareDate(d1:Date, d2:Date, isIncludeTime:boolean) {
    var date1 = new Date(d1);
    var date2 = new Date(d2);
    if ((!date1 && date2) || (date1 && !date2))
        return false;
    if (date1.getFullYear() != date2.getFullYear())
        return false;
    if (date1.getMonth() != date2.getMonth())
        return false;
    if (date1.getDate() != date2.getDate())
        return false;
    if (isIncludeTime) {
        if (date1.getHours() != date2.getHours())
            return false;
        if (date1.getMinutes() != date2.getMinutes())
            return false;
    }
    return true;
  };
  
  //FileUpload Function
  setStyleTableForFixColumn(idTable: string): void {
    const addressGen = `#${idTable} th.fixColumn`;
    const addressColumn = `#${idTable} tr .fixColumn`;
    const addressTbody = `#${idTable} tbody tr .fixColumn`;
    const table = document.getElementById(idTable) as HTMLElement;
    const styleTableMore = document.getElementById('tableMore') as HTMLStyleElement;
  
    if (!table || !styleTableMore) {
      console.error('Table or style element not found');
      return;
    }
  
    const FixRow = document.querySelectorAll(`#${idTable} thead tr`).length;
    const FixColumn = document.querySelectorAll(`#${idTable} thead tr th.fixColumn`).length;
    const FixColumnRight = document.querySelectorAll(`#${idTable} thead tr th.fixColumnRight`).length;
    const FixColumnRighttfoot = document.querySelectorAll(`#${idTable} tfoot tr td.fixColumnRight`).length;
  
    const marginTable = '2px';
    let preFixColumn = 0;
    let widthTotalFixColumn = parseInt(marginTable.replace('px', ''), 10);
  
    for (let iColumn = 1; iColumn <= FixColumn; iColumn++) {
      
      styleTableMore.innerText += `${addressColumn}:nth-child(${iColumn}){position: sticky; left: calc(${widthTotalFixColumn}px - 2px);
                                                       box-shadow: 1px 0px #e3e3e3;z-index: 2!important;}`;
      styleTableMore.innerText += `${addressGen}:nth-child(${iColumn}){z-index: 3!important;}`;
      preFixColumn = (document.querySelectorAll(addressColumn)[iColumn - 1] as HTMLElement).offsetWidth;
      widthTotalFixColumn += preFixColumn;
  
      styleTableMore.innerText += `@media screen and (max-width: 768px){
        ${addressColumn}:nth-child(${iColumn}){
          left: auto;
        }
      }`;
    }
  
    //---------------------------------------------------------
    const addressGenRight = `#${idTable} th.fixColumnRight`;
    const addressColumnRight = `#${idTable} tr .fixColumnRight`;
    const addressTbodyRight = `#${idTable} tbody tr .fixColumnRight`;
    widthTotalFixColumn = parseInt(marginTable.replace('px', ''), 10);
  
    const CountAllColumn = document.querySelectorAll(`#${idTable} thead tr:nth-child(1) th`).length;
    for (let iColumn = 0; iColumn < FixColumnRight; iColumn++) {    
      styleTableMore.innerText += `${addressColumnRight}:nth-child(${CountAllColumn - iColumn}){position: sticky;right: calc(${widthTotalFixColumn}px - 2px)}`;
      styleTableMore.innerText += `${addressGenRight}:nth-child(${CountAllColumn - iColumn}){z-index: 3 !important;}`;
      preFixColumn = (document.querySelectorAll(addressColumnRight)[FixColumnRight - iColumn - 1] as HTMLElement).offsetWidth;
      widthTotalFixColumn += preFixColumn;
  
      if (iColumn === FixColumnRight - 1) {
        styleTableMore.innerText += `${addressColumnRight}:nth-child(${CountAllColumn - iColumn}){box-shadow: -1px 0px #e3e3e3}`;
      }
  
      styleTableMore.innerText += `@media screen and (max-width: 768px){
        ${addressColumnRight}:nth-child(${CountAllColumn - iColumn}){
          right: auto;
        }
      }`;
    }
  
    //---------------------------------------------------------
    const addressColumnRightTfoot = `#${idTable} tfoot tr .fixColumnRight`;
    widthTotalFixColumn = parseInt(marginTable.replace('px', ''), 10);
  
    const CountAllFooterColumn = document.querySelectorAll(`#${idTable} tfoot tr:nth-child(1) td`).length;
    for (let iColumn = 0; iColumn < FixColumnRighttfoot; iColumn++) {
      styleTableMore.innerText += `${addressColumnRightTfoot}:nth-child(${CountAllFooterColumn - iColumn}){right: calc(${widthTotalFixColumn}px - 2px); background: #E3EAF3}`;
      preFixColumn = (document.querySelectorAll(addressColumnRightTfoot)[FixColumnRighttfoot - iColumn - 1] as HTMLElement).offsetWidth;
      widthTotalFixColumn += preFixColumn;
  
      if (iColumn === FixColumnRighttfoot - 1) {
        styleTableMore.innerText += `${addressColumnRightTfoot}:nth-child(${CountAllFooterColumn - iColumn}){box-shadow: -1px 0px #e3e3e3}`;
      }
  
      styleTableMore.innerText += `@media screen and (max-width: 768px){
        ${addressColumnRightTfoot}:nth-child(${CountAllFooterColumn - iColumn}){
          right: auto;
        }
      }`;
    }
  
    //---------------------------------------------------------
    let preFixRow = 0;
    let widthTotalFixRow = parseInt(marginTable.replace('px', ''), 10);
    for (let iRow = 1; iRow <= FixRow; iRow++) {
      styleTableMore.innerText += `#${idTable} thead tr:nth-child(${iRow}) th{
        z-index: 2 !important;
        top: calc(${widthTotalFixRow}px - 3px);
      }`;
      preFixRow = (document.querySelectorAll(`#${idTable} thead tr`)[iRow - 1] as HTMLElement).offsetHeight - 2;
      widthTotalFixRow += preFixRow;
  
      if (iRow === FixRow) {
        styleTableMore.innerText += `#${idTable} thead tr:nth-child(${iRow}) th{box-shadow: 0px -1px #e3e3e3 !important}`;
      }
    }
  
    const FixRowFooter = document.querySelectorAll(`#${idTable} tfoot tr`).length;
    preFixRow = 0;
    widthTotalFixRow = 0;
    for (let iRow = FixRowFooter; iRow >= 1; iRow--) {
      styleTableMore.innerText += `#${idTable} tfoot tr:nth-child(${iRow}) td{
          position: sticky;
          z-index: 2;
          background-color: #fff;
          bottom: ${widthTotalFixRow}px;
          box-shadow: 0px 2px #e3e3e3;
      }`;
      preFixRow = (document.querySelectorAll(`#${idTable} tfoot tr`)[iRow - 1] as HTMLElement).offsetHeight;
      widthTotalFixRow += preFixRow;
  
      if (iRow === 1) {
        styleTableMore.innerText += `#${idTable} tfoot tr:nth-child(${iRow}) td{ box-shadow: 0px 1px #e3e3e3;}`;
      }
    }
  }  
}
