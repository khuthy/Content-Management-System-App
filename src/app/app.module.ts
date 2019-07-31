import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewroomsComponent } from './page/viewrooms/viewrooms.component';
import { LoginComponent } from './page/login/login.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './page/details/details.component';
import { MenuComponent } from './page/menu/menu.component';
import { ViewhotelsComponent } from './page/viewhotels/viewhotels.component';
import { RoomdetailsComponent } from './page/roomdetails/roomdetails.component';

@NgModule({
  declarations: [
    AppComponent,

    ViewroomsComponent,
    LoginComponent,
    DetailsComponent,
    MenuComponent,
    ViewhotelsComponent,
    RoomdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'viewhotels', component: ViewhotelsComponent},
      {path: 'details/:id', component: DetailsComponent},
      {path: 'roomdetails/:id', component: RoomdetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
