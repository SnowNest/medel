import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { UsuarioProvider } from '../../providers/usuario/usuario';

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
  user: string;
  password: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _usuario: UsuarioProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  logIn() {
    console.log(this.user);
  }

  logInGoogle() {

    let loading = this.loadingCtrl.create({
      content: "Espere por favor..."
    });
    loading.present();

    this._usuario.logInGoogle().then(valido => {

      console.log(valido);
      loading.dismiss();    

    }).catch(error => {
      loading.dismiss();
      this.toastCtrl.create({
        message: 'ERROR de inicio se sesión',
        duration: 1500
      }).present();
      console.log("ERROR en logInGoogle: " + JSON.stringify(error));
    });
  }

  logInFacebook(){
    let loading = this.loadingCtrl.create({
      content: "Espere por favor..."
    });
    loading.present();

    this._usuario.logInFacebook().then(valido => {

      console.log(valido);
      loading.dismiss();    

    }).catch(error => {
      loading.dismiss();
      this.toastCtrl.create({
        message: 'ERROR de inicio se sesión',
        duration: 1500
      }).present();
      console.log("ERROR en logInFacebook: " + JSON.stringify(error));
    });    
  }

  logInTwitter(){
    let loading = this.loadingCtrl.create({
      content: "Espere por favor..."
    });
    loading.present();

    this._usuario.logInTwitter().then(valido => {

      console.log(valido);
      loading.dismiss();    

    }).catch(error => {
      loading.dismiss();
      this.toastCtrl.create({
        message: 'ERROR de inicio se sesión',
        duration: 1500
      }).present();
      console.log("ERROR en logInTwitter: " + JSON.stringify(error));
    });    
  }

}
