import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../user.service';//Importamos el servicio
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Creamos variable para el login
  username: String = '';
  password: string = '';
  
  constructor(private toastController: ToastController, 
              private router: Router,
              private userService: UserService,
              private modalController: ModalController) {}

  //Logica para autenticar un usuario
  login(){
    const usuarioEncontrado = this.userService.usuarios.find(
      (user) => user.username === this.username &&
       user.password === this.password);
  
    //Inicio de sesion
    //redirigir a la pagina de bienvenida
    if(usuarioEncontrado){
      this.router.navigate(['/bienvenida', this.username]);
      this.modalController.dismiss();
    }else{
      //En el caso que se equivoque el usuario mostrar mensaje de error
      //Llamamos al metodo 
      this.mostrarError();
    }
  }

  //Funcion para mensaje de alerta  
  async mostrarError() {
    const toast = await this.toastController.create({
      message: 'Credenciales incorrectas',
      duration: 2000,
      position: 'middle',
      color: 'danger'
    });

    await toast.present();
  }

  cerrarModal() {
    this.modalController.dismiss();
  }

}
