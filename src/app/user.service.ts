import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    //Definimos el arreglo la idea que sea accesible para todas las paginas
    usuarios: any[] = [
      {username:'Paul', password:'Arellano'},
      {username:'Luis', password:'Laborie'}
    ];
    
    constructor() { }
  
  }

  

