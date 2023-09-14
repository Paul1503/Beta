import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {
   username: string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const usernameParam = this.route.snapshot.paramMap.get('username');
    console.log('Valor de usernameParam:', usernameParam);
    if (usernameParam !== null) {
      this.username = usernameParam;
      console.log('Valor de username:', this.username);
    }
  }

}
