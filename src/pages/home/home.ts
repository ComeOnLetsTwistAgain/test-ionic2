import { ViewChild } from '@angular/core/src/metadata/di';
import { Component } from '@angular/core';

import { NavController, Content } from 'ionic-angular';

import { Test } from '../../providers/test';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;

  test: any = "test";
  testProvider: any;

  constructor(public navCtrl: NavController, test: Test) {
    this.testProvider = test;
    
  }

  scroll() {
    this.content.scrollToBottom();
  }
  scrollUp() {
    this.content.scrollToTop();
  }



}
