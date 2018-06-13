import { Component, Input } from '@angular/core';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent {
  @Input() index: any = null;
  @Input() title: string = null;
}
