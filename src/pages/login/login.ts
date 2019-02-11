import { PrincipalPage } from './../principal/principal';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { RestaurarContraseñaPage } from '../restaurar-contraseña/restaurar-contraseña';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private fire:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'AVISO',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value , this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('Has iniciado sesión');
      this.navCtrl.push( PrincipalPage );

      this.user.value="";
      this.password.value="";
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert("Cuenta no registrada");
    })
  	console.log('Would sign in with ', this.user.value, this.password.value);
  }


  IrRegistro(){
    this.navCtrl.push(RegistroPage);
  }
  
  IniciarSesion(){
    this.navCtrl.push(PrincipalPage);
  }

  RecuperarPass(){
    this.navCtrl.push(RestaurarContraseñaPage);
  }
  
}
