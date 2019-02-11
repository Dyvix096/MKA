import { FormBuilder } from '@angular/forms';
import { SubirPage } from './../subir/subir';
import { PrincipalPage } from './../principal/principal';
import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Productos } from '../../models/productos';
import { ListaProductosProvider } from '../../providers/importardatos';


@Component({
  selector: 'page-crear-producto',
  templateUrl: 'crear-producto.html',
})

export class CrearProductoPage {

  item:Productos = {
    NombreProducto: "" ,
    EstadoProducto: "" ,
    Direccion: "" ,
    Imagen: "" ,
    Descripcion: ""
  };

  posts : Observable<any[]>;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              private modalCtrl:ModalController,
              private afDB:AngularFireDatabase,
              private servicioListaProductos : ListaProductosProvider) {      
    this.posts = this.afDB.list('post').valueChanges();
  }

  mostrar_modal(){
    let modal = this.modalCtrl.create(SubirPage);
    modal.present();
  }
  
  addItem(item:Productos){
    this.servicioListaProductos.addItem(item).then ( ref =>{
      console.log (ref.key);
      this.navCtrl.setRoot ("PrincipalPage");
    }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearProductoPage');
  }

  IrPrincipal(){
    this.navCtrl.push(PrincipalPage);
  }

}

