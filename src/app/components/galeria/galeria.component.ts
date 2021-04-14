import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
