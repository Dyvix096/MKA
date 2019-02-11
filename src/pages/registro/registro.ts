import { LoginPage } from './../login/login';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  
	@ViewChild('username') user;
	@ViewChild('password') password;

  validacion: FormGroup;

  constructor(private alertCtrl: AlertController,
              private fire: AngularFireAuth,
              public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder: FormBuilder) {
    this.validacion = this.formBuilder.group({
      nombre: ['',[Validators.required,Validators.minLength(3)]],
      email: ['',[Validators.required,Validators.email]],
      pass: ['',[Validators.required,Validators.minLength(6)]]
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  IrPrincipal(){
    this.navCtrl.push(LoginPage);
  }
  
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registerUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value , this.password.value)
    .then(data => {
      console.log('got data ', data);
      this.alert('Registered!');
    })
    .catch(error => {
      console.log('got an error ', error);
      this.alert(error.message);
    });
  	console.log('Would register user with ', this.user.value, this.password.value);
  }

}
