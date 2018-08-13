import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-used-cars',
  templateUrl: './used-cars.component.html',
  styleUrls: ['./used-cars.component.css']
})
export class UsedCarsComponent implements OnInit {

  cars: Observable<any[]>;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.cars = this.db.list<any>('seminuevos').valueChanges();
  }

  ngOnInit() {
  }

}
