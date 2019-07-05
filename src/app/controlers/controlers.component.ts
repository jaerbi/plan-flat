import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlers',
  templateUrl: './controlers.component.html',
  styleUrls: ['./controlers.component.scss']
})
export class ControlersComponent implements OnInit {

  visibility: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
