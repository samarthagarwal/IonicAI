import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  messages: any[] = [];

  constructor(public navCtrl: NavController) {

    this.messages.push({
      text: "Hi, how can I help you?",
      sender: "api"
    })

    this.messages.push({
      text: "Hello",
      sender: "me"
    })

  }

}
