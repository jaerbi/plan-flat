import { Component, OnInit } from '@angular/core';

export interface Cont {
  title: string
  value: number
}

@Component({
  selector: 'app-controlers',
  templateUrl: './controlers.component.html',
  styleUrls: ['./controlers.component.scss']
})
export class ControlersComponent implements OnInit {

  visibility: boolean = true;

  cont: Cont[] = [
    {
      title: 'visibility',
      value: 10
    },
    {
      title: 'live_tv',
      value: 20
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  updateControlers(cont: Cont) {
    console.log(cont);
  }

}
