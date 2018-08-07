import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import * as firebase from 'firebase/app';
import { Upload } from '../uploads/shared/upload';
import { UploadService } from '../uploads/shared/upload.service';

@Component({
  selector: 'app-new-cars',
  templateUrl: './new-cars.component.html',
  styleUrls: ['./new-cars.component.css']
})
export class NewCarsComponent implements OnInit {

  brands: Observable<any[]>;
  new_car: any = {};
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
    this.new_car.precio = [];
    this.new_car.precio.push(this.precio);
    this.new_car.precio_contado = this.precio;
    this.uploadSingle();
    console.log(this.new_car)
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload, this.new_car);
  }

  detectFiles($event: Event) {
    this.selectedFiles = ($event.target as HTMLInputElement).files;
  }


}
