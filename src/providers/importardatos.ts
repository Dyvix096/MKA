import {Productos} from '../models/productos';

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class ListaProductosProvider {


  private refListaProductos = this.db.list<Productos>('ListaProductos');
  constructor(private db:AngularFireDatabase) {

  }

  addItem(item:Productos){
    return this.refListaProductos.push(item);
  }

  getItemList(){
    return this.refListaProductos;
  }

  editItem(item:Productos){
    return this.refListaProductos.update(item.key, item);
  }

  deleteItem(item:Productos){
    return this.refListaProductos.remove (item.key);
  }
}