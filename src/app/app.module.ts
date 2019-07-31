import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewroomsComponent } from './page/viewrooms/viewrooms.component';
import { LoginComponent } from './page/login/login.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './page/details/details.component';
import { MenuComponent } from './page/menu/menu.component';

import { RoomdetailsComponent } from './page/roomdetails/roomdetails.component';
import { RegisterComponent } from './page/register/register.component';

@NgModule({
  declarations: [
    AppComponent,

    ViewroomsComponent,
    LoginComponent,
    DetailsComponent,
    MenuComponent,
 
    RoomdetailsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'viewrooms', component: ViewroomsComponent},
      {path: 'roomdetails/:id', component: RoomdetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
