import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usuarios: any[] = [
    { email: 'paul@example.com', password: 'Arellano', username: 'Paul' },
    { email: 'lu.laborie@duocuc.cl', password: 'Laborie', username: 'Luis' }
  ];

  constructor() { }
}


