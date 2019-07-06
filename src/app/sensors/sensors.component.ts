import {Component, Input, OnInit} from '@angular/core';
import {Cont} from "../controlers/controlers.component";

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {

  @Input() item: Cont;

  constructor() { }

  ngOnInit() {
  }

}
