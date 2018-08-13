import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../../node_modules/angularfire2/database';
import { Upload } from './upload';
import * as firebase from 'firebase/app';
import 'firebase/storage' // <- add

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  basePath = 'cars';
  semiPath = 'seminuevos';
  contador_galeria: any;

  constructor(
    private db: AngularFireDatabase
  ) {

  }

  pushUpload(upload: Upload, car: any) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
    this.contador_galeria = 0;
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: firebase.storage.UploadTaskSnapshot) => {
        // upload in progress
        const snap = snapshot;
        upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error);
        return error
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          upload.url = downloadURL;
          upload.name = upload.file.name;
          this.saveFileData(upload, car);
        });
      
      },
    );
  }
  pushSemiUpload(upload: Upload, car: any) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
    this.contador_galeria = 0;
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: firebase.storage.UploadTaskSnapshot) => {
        // upload in progress
        const snap = snapshot;
        upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error);
        return error
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          upload.url = downloadURL;
          upload.name = upload.file.name;
          this.saveSemiFileData(upload, car);
        });
      
      },
    );
  }

  private saveFileData(upload: Upload, car: any) {
    car.img = upload.url;
    this.db.list(`${this.basePath}/`).push(car);
  }

  private saveSemiFileData(upload: Upload, car: any) {
    car.img = upload.url;
    this.db.list(`${this.semiPath}/`).push(car);
  }
}
