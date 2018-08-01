import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';

@Component({
  selector: 'app-new-cars',
  templateUrl: './new-cars.component.html',
  styleUrls: ['./new-cars.component.css']
})
export class NewCarsComponent implements OnInit {

  brands: Observable<any[]>;

  constructor(
    db: AngularFireDatabase
  ) {
    this.brands = db.list('brands').valueChanges();
   }

  ngOnInit() {
  }

}
