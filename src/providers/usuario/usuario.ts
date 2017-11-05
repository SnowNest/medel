import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

//import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UsuarioProvider {

  constructor( private afAuth: AngularFireAuth) {
    //console.log('Hello UsuarioProvider Provider');
  }

  logInGoogle() {
    let promesa = new Promise((resolve,reject)=>{
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(result => {
        console.log(result);
        if(result.additionalUserInfo.isNewUser==true){
          console.log('Es un usuario nuevo');
          //aqui va el registro
          resolve(true);
        }else{
          console.log('El usuario ya existe');
          //aqui va inicio de sesión
          resolve(true);
        }
      });
    }).catch(error=>console.log("Error en promesa Service: "+JSON.stringify(error)));   
    return promesa;
  }

  logInFacebook(){
    let promesa = new Promise((resolve,reject)=>{
      this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(result => {
        console.log(result);
        if(result.additionalUserInfo.isNewUser==true){
          console.log('Es un usuario nuevo');
          //aqui va el registro
          resolve(true);
        }else{
          console.log('El usuario ya existe');
          //aqui va inicio de sesión
          resolve(true);
        }
      });
    }).catch(error=>console.log("Error en promesa Service: "+JSON.stringify(error)));   
    return promesa;    
  }

  logInTwitter(){
    let promesa = new Promise((resolve,reject)=>{
      this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then(result => {
        console.log(result);
        if(result.additionalUserInfo.isNewUser==true){
          console.log('Es un usuario nuevo');
          //aqui va el registro
          resolve(true);
        }else{
          console.log('El usuario ya existe');
          //aqui va inicio de sesión
          resolve(true);
        }
      });
    }).catch(error=>console.log("Error en promesa Service: "+JSON.stringify(error)));   
    return promesa;    
  }
}
