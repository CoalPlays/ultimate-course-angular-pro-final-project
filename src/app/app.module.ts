import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Store} from "../store/store";
import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    BrowserModule
  ],
  providers: [ Store ],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
* const firebaseConfig = {
  apiKey: "AIzaSyCiDdUfR8aTUR98i-Awf24qgXB-IZZS21M",
  authDomain: "fittness-app-34317.firebaseapp.com",
  databaseURL: "https://fittness-app-34317-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fittness-app-34317",
  storageBucket: "fittness-app-34317.appspot.com",
  messagingSenderId: "505113411951",
  appId: "1:505113411951:web:1425dd21707fdbcd4fe89a"
};
* */
