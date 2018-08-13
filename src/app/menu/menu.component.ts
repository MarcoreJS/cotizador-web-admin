import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import { Router, ChildActivationStart } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user_logged: boolean = false;

  constructor(
    private afa: AngularFireAuth,
    private router: Router
  ) {
    this.afa.authState.subscribe(res => {
      this.user_logged = (res) ? true:false;
    })
  }

  ngOnInit() {

  }

  logOut(){
    this.afa.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }

}
