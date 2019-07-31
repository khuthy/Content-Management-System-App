import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { fetchData } from 'src/app/firebase';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewrooms',
  templateUrl: './viewrooms.component.html',
  styleUrls: ['./viewrooms.component.css']
})
export class ViewroomsComponent implements OnInit {
  hotelKey: any = '-Lktf3-zN37S2LukFLea';
  rooms: any;
  database = firebase.database().ref();

  constructor(private router: Router) { 
    var user = firebase.auth().currentUser;
    if(user) {
      this.database.child('rooms').orderByChild('hotelKey').equalTo(this.hotelKey).on('value', (snap) => {
      this.rooms = fetchData(snap);
    }); 
    }else {
      this.router.navigateByUrl('/');
    }
    
   }

  ngOnInit() {
  }

}
