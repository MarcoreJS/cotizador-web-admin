import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-new-cars',
  templateUrl: './view-new-cars.component.html',
  styleUrls: ['./view-new-cars.component.css']
})
export class ViewNewCarsComponent implements OnInit {

  cars: Observable<any[]>;

  constructor(
    db: AngularFireDatabase
  ) {
    this.cars = db.list('cars').valueChanges();
   }

  ngOnInit() {
  }

}
