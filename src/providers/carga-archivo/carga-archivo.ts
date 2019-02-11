import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController } from 'ionic-angular';


@Injectable()
export class CargaArchivoProvider {
  imagenes: ArchivoSubir[] =[];
  miurl: string;

  constructor(private toastCtrl:ToastController,
              private afDB:AngularFireDatabase) {
    ;
  }

  cargar_imagen_firebase(archivo:ArchivoSubir){
    let promesa = new Promise ( (resolve, reject)=>{
      this.mostrar_toast("Cargando...");
      let storageRef = firebase.storage().ref();
      let nombreArchivo:string = new Date().valueOf().toString();

      let uploadTask: firebase.storage.UploadTask = 
        storageRef.child (`imagenesApp/${nombreArchivo}`)
                .putString(archivo.url,'base64', {contentType:'image/jpeg'});

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
          ()=> {},
          (error)=>{
            console.log("ERROR en la carga ");
            console.log(JSON.stringify(error));
            this.mostrar_toast(JSON.stringify(error));
            reject();
          },
          ()=>{ 
            console.log ("Archivo subido");
            this.mostrar_toast("Imagen cargada correctamente");
            uploadTask.snapshot.ref.getDownloadURL().then((u)=>{
              archivo.url = u;
              console.log("::::url:::" + archivo.url +":::");
              archivo.key = nombreArchivo;
              this.crear_registro_firebase(archivo);               
              }); 
              resolve();         
          }
        )
    });
    return promesa;
  }

  private crear_registro_firebase(archivo:ArchivoSubir){
      console.log("registro firebase::::")
      console.log(JSON.stringify(archivo ));
      this.afDB.object(`/post/${archivo.key}`).update(archivo); 
      this.imagenes.push(archivo);
    }

  mostrar_toast( mensaje: string ){
    this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    }).present();
  }

}

interface ArchivoSubir{
  titulo:string;
  url:string;
  key?:string;
}