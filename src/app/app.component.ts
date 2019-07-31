import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from './firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Hotel Web App';
  
  constructor(private router: Router) {
    firebase.initializeApp(FIREBASE_CONFIG);
    this.startAuth();
  }
startAuth() {
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      this.router.navigateByUrl('/viewrooms');
    }else {
      this.router.navigateByUrl('/');
    }
  })
}
}
