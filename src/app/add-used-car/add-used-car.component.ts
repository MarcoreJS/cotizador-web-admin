import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Upload } from '../uploads/shared/upload';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { UploadService } from '../uploads/shared/upload.service';

@Component({
  selector: 'app-add-used-car',
  templateUrl: './add-used-car.component.html',
  styleUrls: ['./add-used-car.component.css']
})
export class AddUsedCarComponent implements OnInit {

  brands: Observable<any[]>;
  new_car: any = { marca: 'Seminuevo' };
  precio: any;

  selectedFiles: FileList;
  currentUpload: Upload;

  constructor(
    private db: AngularFireDatabase,
    private upSvc: UploadService
  ) {
    this.brands = this.db.list('brands').valueChanges();
  }

  ngOnInit() {
  }

  saveNewCar() {
    this.uploadSingle();
    console.log(this.new_car);
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushSemiUpload(this.currentUpload, this.new_car);
  }

  detectFiles($event: Event) {
    this.selectedFiles = ($event.target as HTMLInputElement).files;
  }

}
