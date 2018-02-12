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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AttendancePage,
    ExtraclassesPage
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
    ExtraclassesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AttendanceService
  ]
})
export class AppModule {}
