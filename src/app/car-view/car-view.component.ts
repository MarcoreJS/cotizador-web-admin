import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.css']
})
export class CarViewComponent implements OnInit {

  car: any;
  car_key: any;

  constructor(
    private db: AngularFireDatabase,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.car_key = params.id.slice();
    })
    this.db.object<any>('cars/' + this.car_key).valueChanges().subscribe(res => {
      this.car = res;
    })
  }

  ngOnInit() {
  }

}
