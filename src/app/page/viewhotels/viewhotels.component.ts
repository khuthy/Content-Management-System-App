import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { fetchData } from 'src/app/firebase';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewhotels',
  templateUrl: './viewhotels.component.html',
  styleUrls: ['./viewhotels.component.css']
})
export class ViewhotelsComponent implements OnInit {
  database: any = firebase.database().ref();
  hotels: any;
  constructor(private router: Router) {

    var user = firebase.auth().currentUser;
    if(user) {
      this.database.child('hotels').on('value', (snap) => {
      this.hotels = fetchData(snap);
    }); 
    }else {
      this.router.navigateByUrl('/');
    }
   }

  ngOnInit() {
  }

  viewDetails(key){
    this.router.navigate(['details', key.id]);
  }

}
