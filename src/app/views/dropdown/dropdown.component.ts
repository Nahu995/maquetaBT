import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations'

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [
    trigger('enterState',[
      state('void', style({
        transform: 'translateX(-100%)',
        opacity:0,
      })),
      transition(':enter',[
        animate(300, style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('openClose', [
      state('open', style({
        display:'inline',
        opacity: 1,
      })),
      transition('closed <=> open',[
        animate(300,style({
          transition:'linear 2s',
          transform:'translateY(0)'
        }))
      ]),
      state('closed', style({
        display:'none',
        opacity: 0,
        visibility:'hidden',
        transform:'translateY(-50%)'
      })),
      transition('open <=> closed',[
        animate(100,style({
          transition:'linear',
          transform:'translateY(0)'
        }))
      ])
    ])
  ]
})
export class DropdownComponent implements OnInit {
  hiddenDetail: Boolean = true; 
  cotizaciones= ["pizarra","interno"];
  cuentas:{}[] = [
    {
      tipo: "Cuenta Corriente",
      numero: 2512736183718,
      saldo: 3418.00
    },
    {
      tipo: "Cuenta Corriente",
      numero: 2512736183718,
      saldo: 3419.00
    },
    {
      tipo: "Cuenta Corriente",
      numero: 2512736183718,
      saldo: 3417.00
    }
  ]
  constructor() { }
  isOpen = true;
  show = false;
  ngOnInit() {
  }

  toggleDetail(){
    console.log(this.hiddenDetail)
    return this.hiddenDetail = !this.hiddenDetail;
  }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    this.isOpen = !this.isOpen;

    this.show = !this.show
  }

}
