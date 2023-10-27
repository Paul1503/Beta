import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
<<<<<<< HEAD
  email: String ='';
=======
  username: String ='';
>>>>>>> ed8ff63867f57c9729694ba612af13facf2215ce


  constructor(private toastController: ToastController,
              private router: Router,
              private userService: UserService
  ) {}

  recuperar(){
    const usuarioEncontrado = this.userService.usuarios.find(
<<<<<<< HEAD
      (user) => user.email === this.email
    );

    if(usuarioEncontrado){
      this.mostrar(`${usuarioEncontrado.email} su contraseña es :  ${usuarioEncontrado.password}`);
=======
      (user) => user.username === this.username
    );

    if(usuarioEncontrado){
      this.mostrar(`${usuarioEncontrado.username} su contraseña es :  ${usuarioEncontrado.password}`);
>>>>>>> ed8ff63867f57c9729694ba612af13facf2215ce
      this.router.navigate(['/home'])

    }else{
      this.mostrar('Nombre de usuario no encontrado');
    }
  }

  async mostrar(mensaje:string){
    const toast = await this.toastController.create(
      {
        message: mensaje,
        duration: 4000,
        position: 'middle',
        color:'success'
      }
    );
    await toast.present();
  }
  

  ngOnInit() {
  }

}
