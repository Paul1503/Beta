import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
      this.mostrarError();
    }
  }

  async mostrarError() {
    const toast = await this.toastController.create({
      message: 'Credenciales incorrectas',
      duration: 2000,
      position: 'middle',
      color: 'danger',
    });

    await toast.present();
  }

  cerrarModal() {
    this.modalController.dismiss();
  }
}
