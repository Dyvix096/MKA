import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from './../pages/login/login';
import { PrincipalPage } from '../pages/principal/principal';
import { CrearProductoPage } from '../pages/crear-producto/crear-producto';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;

  pages: Array<{ title: string, component: any , icon: string}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen) {
    this.initializeApp();
    this.pages = [
      { title: 'Inicio', component: PrincipalPage , icon:"home" },
      { title: 'Nuevo Producto', component: CrearProductoPage , icon: "cube" },
      { title: 'Cerrar Sesión', component: LoginPage , icon: "log-out" },
    ];

  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
} 