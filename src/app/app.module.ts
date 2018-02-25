import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AttendancePage } from '../pages/attendance/attendance';
import { ExtraclassesPage } from '../pages/extraclasses/extraclasses';
import { AttendanceService } from '../attendance-service/attendance.service';
import { UserPage } from '../pages/user/user';
import { UserService } from '../doctor-services/services.hospital';
import { DoctorPage } from '../pages/doctor/doctor';
import { CityPage } from '../pages/city/city';
import { HospitalPage } from '../pages/hospital/hospital';
import { PatientPage } from '../pages/patient/patient';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AttendancePage,
    ExtraclassesPage,
    UserPage,
    DoctorPage,
    HospitalPage,
    CityPage,
    PatientPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AttendancePage,
    ExtraclassesPage,
    UserPage,
    DoctorPage,
    CityPage,
    HospitalPage,
    PatientPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AttendanceService,
    UserService
  ]
})
export class AppModule {}
