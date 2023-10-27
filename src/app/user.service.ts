import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
<<<<<<< HEAD
  usuarios: any[] = [
    { email: 'paul@example.com', password: 'Arellano', username: 'Paul' },
    { email: 'lu.laborie@duocuc.cl', password: 'Laborie', username: 'Luis' }
  ];

  constructor() { }
}

=======
    //Definimos el arreglo la idea que sea accesible para todas las paginas
    usuarios: any[] = [
      {username:'Paul', password:'Arellano'},
      {username:'Luis', password:'Laborie'}
    ];
    
    constructor() { }
  
  }

  
>>>>>>> ed8ff63867f57c9729694ba612af13facf2215ce

