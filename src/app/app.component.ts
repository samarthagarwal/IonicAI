import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

declare var window;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      window["ApiAIPlugin"].init(
        {
          clientAccessToken: "015b8095146b4cfeac87a9b25e2181b8", // insert your client access key here 
          lang: "en" // set lang tag from list of supported languages 
        },
        function (result) { 
          alert(result)
         },
        function (error) { 
          alert(error)
         }
      );

    });
  }
}

