import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase'; 
import { fetchData } from 'src/app/firebase';
@Component({
  selector: 'app-roomdetails',
  templateUrl: './roomdetails.component.html',
  styleUrls: ['./roomdetails.component.css']
})
export class RoomdetailsComponent implements OnInit {
  key: any;
  database = firebase.database().ref();
  rooms: any;
  booking: any;
  constructor(private router: ActivatedRoute) { 
    var user = firebase.auth().currentUser;
    if(user) {
      this.router.paramMap.subscribe((param) => {
      this.key = param.get('id');
      console.log(param);
      
    })

    this.database.child('rooms').orderByKey().equalTo(this.key).on('value', (snap) => {
      this.rooms = fetchData(snap);
    });
    this.database.child('booking').orderByChild('roomKey').equalTo(this.key).on('value', (snap) => {
     let count = fetchData(snap);
      this.booking = count.length;
    });
    
  }

  }

  ngOnInit() {
  }

}
