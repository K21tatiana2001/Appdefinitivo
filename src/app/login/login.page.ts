import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public loadingCtrl: LoadingController ) { }
  user=
  {
    usuario:"karen",
    password:"123",
  }

  ngOnInit() {
  }

  async login(forma:NgForm){
    
      if (forma.valid) {
        const loading = await this.loadingCtrl.create({
          message: 'Validando...',
          spinner: 'bubbles'
        });
        loading.present();
        this.user.usuario = forma.value.usuario;
        this.user.password = forma.value.password;

        this.loadingCtrl.dismiss() 
       }
}
}






