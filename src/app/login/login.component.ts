import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  email: any;
  password: any;

  constructor(
    private afa: AngularFireAuth,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {

      this.afa.auth.signInWithEmailAndPassword(
        String(formData.value.email),
        formData.value.password
      ).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/cars']);
        }).catch(
          (err) => {
            console.log(formData.value);
            console.log(err);
            this.error = err;
          })
    }
  }

}
