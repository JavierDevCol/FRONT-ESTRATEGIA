import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-siders',
  templateUrl: './siders.component.html',
  styles: []
})
export class SidersComponent implements OnInit {

  public rol: string;
  public username: string;

  constructor() {
  }

  ngOnInit(): void {
    this.rol = localStorage.getItem('role');
    this.username = localStorage.getItem('user');
    console.log("ACA  " + this.rol);
  }
}
