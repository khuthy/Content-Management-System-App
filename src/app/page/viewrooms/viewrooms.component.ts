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
  name: string;
  constructor(private router: Router) { 
    var user = firebase.auth().currentUser;
    if(user) {
      this.database.child('hotels').orderByKey().equalTo(this.hotelKey).on('value', (snapshot) => {
         this.name = snapshot.val().hotelName; console.log(snapshot.val().hotelName);
         
        
      })
      this.database.child('rooms').orderByChild('hotelKey').equalTo(this.hotelKey).on('value', (snap) => {
      this.rooms = fetchData(snap);
    }); 
    }else {
      this.router.navigateByUrl('/');
    }
    
   }

  ngOnInit() {
  }
  logout() {
    firebase.auth().signOut().then(() => {
      console.log('loggged out');
      this.router.navigateByUrl('/');
    })
  }

}
