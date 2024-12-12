export class ResponseModel {
    status!: number;
    code!: string;
    message!: string;
    data!: object[];

    constructor(){
        this.status = -1;
        this.code = "";
        this.message ="";
    }
}

export interface ResponseLogin {
    isSecond: number;
    isChooseStore: boolean;
    userId: string;
    siteId: number;
    stores: string;
    token: string;
    // storeName: string;
    // storeLogo: string;
    storeInfo:any;
    userName: string;
    fullName: string;
}
