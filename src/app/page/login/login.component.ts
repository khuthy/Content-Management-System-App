import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  user = {
   email: '',
   password: ''
 }

  constructor(
   private router: Router
  ) { 
   
  }

  ngOnInit() {
  }
  
  loginForm() {
    
    firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password).then(result => {
        
      console.log('logged in');
        console.log(result);
        this.router.navigateByUrl('/viewhotels')
        
        }).catch((error) => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // ...
      });

  }

}
