import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { UserService } from '../user.service';
=======
import { UserService } from '../user.service';//Importamos el servicio
>>>>>>> ed8ff63867f57c9729694ba612af13facf2215ce
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
<<<<<<< HEAD
  email: string = '';
  password: string = '';
  username: string = ''; // Declarar la variable aquí

  constructor(
    private toastController: ToastController,
    private router: Router,
    private userService: UserService,
    private modalController: ModalController
  ) {}

  login() {
    const usuarioEncontrado = this.userService.usuarios.find(
      (user) => user.email === this.email && user.password === this.password
    );

    if (usuarioEncontrado) {
      this.username = usuarioEncontrado.username;
      this.router.navigate(['/bienvenida', this.username]);
      this.modalController.dismiss();
    } else {
=======

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
>>>>>>> ed8ff63867f57c9729694ba612af13facf2215ce
      this.mostrarError();
    }
  }

<<<<<<< HEAD
=======
  //Funcion para mensaje de alerta  
>>>>>>> ed8ff63867f57c9729694ba612af13facf2215ce
  async mostrarError() {
    const toast = await this.toastController.create({
      message: 'Credenciales incorrectas',
      duration: 2000,
      position: 'middle',
<<<<<<< HEAD
      color: 'danger',
=======
      color: 'danger'
>>>>>>> ed8ff63867f57c9729694ba612af13facf2215ce
    });

    await toast.present();
  }

  cerrarModal() {
    this.modalController.dismiss();
  }
<<<<<<< HEAD
=======

>>>>>>> ed8ff63867f57c9729694ba612af13facf2215ce
}
