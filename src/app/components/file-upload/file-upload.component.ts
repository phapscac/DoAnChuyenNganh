import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
import { SharedCommonModule } from '../../common/shared.module';
import { CommonModule } from '@angular/common';
import { MessageService, PrimeNGConfig} from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { APIService } from '../../services/api.service';
import { API_ENDPOINT } from '../../environments/environments';
import { DataSubjectService } from '../../Configs/DataSubject/dataSubject.service';
import { FileUploadModel } from '../../interfaces/FileUpload';
import { ResponseModel } from '../../interfaces/response-model';


@Component({
  selector: 'app-file-upload',
  standalone:true,
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css',
  imports: [FileUploadModule, SharedCommonModule,CommonModule,ButtonModule],
})
export class FileUploadComponent {
    @Input() multiple:boolean = true;
    @Input() accept:string = '';
    @Input() disabled:boolean = false;
    @Input() uploadType!:number;

    @Output() responeseEvent = new EventEmitter<ResponseModel>();
    files = [];
    totalSize : number = 0;

    totalSizePercent : number = 0;

    constructor(private config: PrimeNGConfig, private dialogService: DataSubjectService, private apiService: APIService) {}

    choose(event:any, callback:any) {
        callback();
    }

    onRemoveTemplatingFile(event:any, file:any, removeFileCallback:any, index:any) {
        removeFileCallback(event, index);
        this.totalSize -= parseInt(this.formatSize(file.size));
        this.totalSizePercent = this.totalSize / 10;
    }

    onClearTemplatingUpload(clear:any) {
        clear();
        this.totalSize = 0;
        this.totalSizePercent = 0;
    }

    onTemplatedUpload(event:any,type:string) {   
        const formData: FormData = new FormData();
        let files:FileUploadModel[] = [];
        for(let i=0; i < event.files.length; i++){
            let fileTemp:FileUploadModel = {
                File: event.files[i],
                FileID:i.toString(),
            }
            files.push(fileTemp);

        }

        files.forEach((fileUpload, index) => {
            formData.append(`fileUploads[${index}].FileID`, fileUpload.FileID); // Thêm FileID
            formData.append(`fileUploads[${index}].File`, fileUpload.File); // Thêm File thực tế
          });
        formData.append('uploadType', this.uploadType.toString()); // Thêm tham số `imageType`
        this.uploadImage(formData)

    }

    onSelectedFiles(event:any) {
        this.files = event.currentFiles;
        this.totalSizePercent = this.totalSize / 10;
    }

    uploadEvent(callback:any) {
        callback();
        //this.getInvInvoiceDetail();
    }

    formatSize(bytes:number) {
        const k = 1024;
        const dm = 3;
        const sizes = this.config.translation.fileSizeTypes?this.config.translation.fileSizeTypes :[];
        if (bytes === 0) {
            return `0 ${sizes[0]}`;
        }

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

        return `${formattedSize} ${sizes[i]}`;
    }

    uploadImage(formData:any) {
        const body = {
        
        };
        this.apiService.callAPIFile(API_ENDPOINT.FILESERVICE_ENDPOINT.FILEUPLOAD+"UploadFile", formData).subscribe({
          next: (response: any) => {
            if (response.status == 1) {
                const responseData = response as ResponseModel;
                this.responeseEvent.emit(responseData);
            } else{ 
                this.dialogService.showError(response.message);
            }
          },
          error: (error: any) => {
            this.dialogService.showError(error);
          },
          complete: () => {
          }
        });
      }
}
