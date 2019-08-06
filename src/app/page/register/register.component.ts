import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
    email: string;
    password: string;
  
  
  errors = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  registerForm() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((result) => {
        this.router.navigateByUrl('/viewrooms');
    }).catch((error) => {
      this.errors = error
    })
  }

}
