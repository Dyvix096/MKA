import { PrincipalPageModule } from './../pages/principal/principal.module';
import { SubirPage } from './../pages/subir/subir';
import { ListPage } from './../pages/list/list';
import { LoginPage } from './../pages/login/login';
import { CrearProductoPage } from './../pages/crear-producto/crear-producto';
import { PrincipalPage } from './../pages/principal/principal';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { RegistroPage } from '../pages/registro/registro';
import { RestaurarContraseñaPage } from '../pages/restaurar-contraseña/restaurar-contraseña';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase} from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { Camera} from '@ionic-native/camera/ngx';
import {ImagePicker} from '@ionic-native/image-picker/ngx'

import { CargaArchivoProvider } from '../providers/carga-archivo/carga-archivo';
import { ListaProductosProvider } from '../providers/importardatos';

export const firebaseConfig ={
  apiKey: "AIzaSyBhyOkEIyRvYV--BunWJ0O9YJrdcabh7yk",
    authDomain: "ionicproyect-8eaf1.firebaseapp.com",
    databaseURL: "https://ionicproyect-8eaf1.firebaseio.com",
    projectId: "ionicproyect-8eaf1",
    storageBucket: "ionicproyect-8eaf1.appspot.com",
    messagingSenderId: "629917580726"
};

@NgModule({
  declarations: [
    MyApp,
    CrearProductoPage,
    LoginPage,
    RegistroPage,
    RestaurarContraseñaPage,
    ListPage,
    SubirPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PrincipalPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CrearProductoPage,
    LoginPage,
    RegistroPage,
    RestaurarContraseñaPage,
    ListPage,
    SubirPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    Camera,
    ImagePicker, 
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CargaArchivoProvider,
    ListaProductosProvider
  ]
})
export class AppModule {}
