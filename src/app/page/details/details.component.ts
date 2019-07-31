import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { fetchData } from 'src/app/firebase';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: any;
  rooms: any;
  key: any;
  database = firebase.database().ref();

  constructor(private router: ActivatedRoute) { 
    var user = firebase.auth().currentUser;
    if(user) {
      this.router.paramMap.subscribe((param) => {
      this.key = param.get('id');
    })
    this.database.child('hotels').orderByKey().equalTo(this.key).on('value', (snap) => {
      this.details = fetchData(snap);
    });

    this.database.child('rooms').orderByChild('hotelKey').equalTo(this.key).on('value', (snap) => {
      this.rooms = fetchData(snap);
    });
    }
    
    
  }

  ngOnInit() {
  }



}
