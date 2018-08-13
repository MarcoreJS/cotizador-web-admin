import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-new-cars',
  templateUrl: './view-new-cars.component.html',
  styleUrls: ['./view-new-cars.component.css']
})
export class ViewNewCarsComponent implements OnInit {

  cars: Observable<any[]>;

  constructor(
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.cars = this.db.list('cars').snapshotChanges();
  
   }

  ngOnInit() {
  }

  viewCar(car_key: string) {
    this.router.navigate([car_key + '/car']);
  }

}
