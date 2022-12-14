import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClassroomComponent} from "./classroom/classroom.component";
import {StudentComponent} from "./student/student.component";
import {LoginComponent} from "./login+register+weather/login.component";
import {RegisterComponent} from "./login+register+weather/register.component";
import {WeatherComponent} from "./login+register+weather/weather.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'app-weather',component:WeatherComponent},
];
@NgModule({
  declarations: [
    AppComponent, ClassroomComponent,StudentComponent,LoginComponent,RegisterComponent,TeacherComponent,WeatherComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
