import { Productos } from './../../models/productos';
import { CrearProductoPage } from './../crear-producto/crear-producto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , MenuController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { ListaProductosProvider } from '../../providers/importardatos';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  listaProductos : Observable<Productos[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl: MenuController,
              private shopping: ListaProductosProvider) {

  this.listaProductos = this.shopping
  .getItemList() 
  .snapshotChanges() 
  .pipe (map ( changes => {
      return changes.map ( c=>(
        {
          key: c.payload.key,
          ...c.payload.val(),
        }
      )
      )
  }
  )
  )
}
 //pensarlo 
  selectShoppingItem(shoppingItem : Productos){
  this.navCtrl.push("EditItemPage", {"item": shoppingItem});
}

  ionViewWillEnter() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  IrCrearProducto(){
    this.navCtrl.push(CrearProductoPage);
  }
}
