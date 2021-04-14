import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-trayectoria',
  templateUrl: './trayectoria.component.html',
  styleUrls: ['./trayectoria.component.css']
})
export class TrayectoriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
